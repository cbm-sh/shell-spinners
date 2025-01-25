import { CustomExample, NextJsComponentExample, NextJsExample, OhMyZshExample, StandardExample, ZeroDependencyExample } from '@/components/Examples';
import { getLoaders } from '@/lib/helpers/get-loaders';
import type { LoaderProps } from '@/types';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { memo } from 'react';
import { HiArrowRight, HiOutlineHome } from 'react-icons/hi';

const BackButton = dynamic(() => import('@/components/BackButton').then((mod) => mod.BackButton));
const Renderer = dynamic(() => import('@/components/Renderer').then((mod) => mod.Renderer));
const Share = dynamic(() => import('@/components/Share').then((mod) => mod.Share));
const Button = dynamic(() => import('@/components/ui/Button').then((mod) => mod.Button));

export const generateStaticParams = async () =>
	Object.keys(getLoaders).map((key) => ({
		slug: key,
	}));

const Page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
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
							<Link href='/'>
								<Button
									variant='primary'
									icon={<HiOutlineHome size={16} />}
									aria-label='Back to Home'
								/>
							</Link>
							<Link href={`/${nextLoader}`}>
								<Button
									variant='quinary'
									icon={<HiArrowRight size={16} />}
									aria-label='Next Loader'
								/>
							</Link>
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
				<div className='relative flex min-h-96 flex-col items-center justify-center overflow-hidden border border-neutral-800 bg-black p-6'>
					<div className='absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
					<Renderer speed={speed} keyframes={keyframes} category={category} />
				</div>
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