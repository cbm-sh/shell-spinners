import { getLoaders } from '@/lib/helpers/get-loaders';
import type { LoaderProps } from '@/types';
import dynamic from 'next/dynamic';
import { memo } from 'react';

const CustomExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.CustomExample),
);
const NextJsComponentExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.NextJsComponentExample),
);
const NextJsExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.NextJsExample),
);
const OhMyZshExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.OhMyZshExample),
);
const StandardExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.StandardExample),
);
const ZeroDependencyExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.ZeroDependencyExample),
);
const LoaderRenderer = dynamic(() =>
	import('@/components/LoaderRenderer').then((mod) => mod.LoaderRenderer),
);
const LoaderView = dynamic(() =>
	import('@/components/LoaderView').then((mod) => mod.LoaderView),
);
const Share = dynamic(() => import('@/components/Share').then((mod) => mod.Share));
const BackButton = dynamic(() =>
	import('@/components/ui/Buttons').then((mod) => mod.BackButton),
);
const ForwardButton = dynamic(() =>
	import('@/components/ui/Buttons').then((mod) => mod.ForwardButton),
);
const HomeButton = dynamic(() =>
	import('@/components/ui/Buttons').then((mod) => mod.HomeButton),
);

export const generateStaticParams = async () =>
	Object.keys(getLoaders).map((key) => ({
		slug: key,
	}));

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const loader: LoaderProps | undefined = getLoaders[slug as keyof typeof getLoaders];

	if (!loader) {
		return <div>Loader not found</div>;
	}
	const { category, keyframes, speed } = loader;
	const loaderKeys = Object.keys(getLoaders);
	const currentIndex = loaderKeys.indexOf(slug);
	const nextLoader = loaderKeys[(currentIndex + 1) % loaderKeys.length];

	return (
		<>
			<section>
				<div className='px-6 py-12'>
					<div className='absolute min-h-48 w-full max-w-5xl bg-[linear-gradient(toright,#1a1a1a1px,transparent1px),linear-gradient(tobottom,#1a1a1a1px,transparent1px)] bg-[size:8px10px] [mask-image:radial-gradient(ellipse50%50%at50%50%,#00010%,transparent100%)]' />
					<h1 className='relative text-center text-4xl font-semibold text-balance text-neutral-100 md:text-5xl'>
						{slug.replace(/_/g, ' ')}
					</h1>
					<p className='relative py-6 text-center text-neutral-300'>
						{category.charAt(0).toUpperCase() + category.slice(1)} collection
					</p>
				</div>
			</section>
			<section>
				<div className='min-h-full px-6 pb-0'>
					<div className='flex flex-row items-center justify-between'>
						<div className='inline-flex flex-row items-center justify-center space-x-3 pr-4'>
							<BackButton />
							<HomeButton />
							<ForwardButton slug={`/${nextLoader}`} />
						</div>
						<Share
							className='flex items-end justify-end'
							title={category}
							url={`https://cliloaders.com/${slug}`}
							description={`It's an awesome ${category.toLocaleLowerCase()} loader!`}
						/>
					</div>
				</div>
			</section>
			<section className='w-full p-6'>
				<LoaderView>
					<LoaderRenderer speed={speed} keyframes={keyframes} category={category} />
				</LoaderView>
				<div className='mt-6 space-y-6'>
					<h1 className='text-md font-light text-neutral-400'>Examples</h1>
					<StandardExample name={slug} speed={speed} />
					<CustomExample keyframes={keyframes} />
					<ZeroDependencyExample speed={speed} keyframes={keyframes} />
					<p className='text-sm font-light text-neutral-400'>Usage in Oh My Zsh</p>
					<OhMyZshExample speed={speed} keyframes={keyframes} />
					<p className='text-sm font-light text-neutral-400'>Usage in Next.js</p>
					<NextJsExample />
					<NextJsComponentExample speed={speed} keyframes={keyframes} />
				</div>
			</section>
		</>
	);
};

export default memo(Page);
