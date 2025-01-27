import { BackButton } from '@/components/BackButton';
import {
	CustomExample,
	NextJsComponentExample,
	NextJsExample,
	OhMyZshExample,
	StandardExample,
	ZeroDependencyExample,
} from '@/components/Examples';
import { Renderer } from '@/components/Renderer';
import { Button } from '@/components/ui/Button';
import { getLoaders } from '@/lib/helpers/get-loaders';
import type { LoaderProps } from '@/types';
import Link from 'next/link';
import { memo } from 'react';
import { HiArrowRight } from 'react-icons/hi';

export const generateStaticParams = async () =>
	Object.keys(getLoaders).map((key) => ({
		slug: key,
	}));

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const loader: LoaderProps = await getLoaders[slug as keyof typeof getLoaders];
	const { category, keyframes, speed } = loader as LoaderProps;
	const loaderKeys = Object.keys(getLoaders);
	const currentIndex = loaderKeys.indexOf(slug);
	const nextLoader = loaderKeys[(currentIndex + 1) % loaderKeys.length];

	return (
		<>
			<section className='px-6 py-12'>
				<h1 className='relative text-center text-4xl font-semibold text-balance text-neutral-50 md:text-5xl'>
					{slug.replace(/_/g, ' ')}
				</h1>
				<p className='relative py-6 text-center text-neutral-50'>
					{category.toLocaleLowerCase()} collection
				</p>
			</section>
			<section className='w-full border border-x-0 border-b-0 border-t-neutral-800 p-6'>
				<div className='relative flex min-h-96 flex-col items-center justify-center overflow-hidden border border-neutral-800 p-6'>
					<div className='absolute top-4 z-40 flex w-full flex-row items-center justify-between px-4'>
						<BackButton />
						<Link href={`/${nextLoader}`}>
							<Button
								className=''
								variant='quinary'
								icon={<HiArrowRight size={16} />}
								aria-label='Next Loader'
							/>
						</Link>
					</div>
					<div className='absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
					<Renderer speed={speed} keyframes={keyframes} category={category} />
				</div>
				<div className='mt-6 space-y-6'>
					<h1 className='text-md text-neutral-50'>Examples</h1>
					<StandardExample name={slug} speed={speed} />
					<CustomExample keyframes={keyframes} />
					<ZeroDependencyExample speed={speed} keyframes={keyframes} />
					<p className='text-sm text-neutral-50'>Usage in Oh My Zsh</p>
					<OhMyZshExample speed={speed} keyframes={keyframes} />
					<p className='text-sm text-neutral-50'>Usage in Next.js</p>
					<NextJsExample />
					<NextJsComponentExample speed={speed} keyframes={keyframes} />
				</div>
			</section>
		</>
	);
};

export default memo(Page);
