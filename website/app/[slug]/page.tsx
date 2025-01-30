import { Hero } from '@/components/Hero';
import { Renderer } from '@/components/Renderer';
import LOADERS from '@/lib/config/loaders';
import type { LoaderProps } from '@/types';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const CodeBlock = dynamic(() =>
	import('@/components/CodeBlock').then((mod) => mod.CodeBlock),
);
const NextJsComponentExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.NextJsComponentExample),
);
const OhMyZshExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.OhMyZshExample),
);
const ZeroDependencyExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.ZeroDependencyExample),
);
const BackButton = dynamic(() =>
	import('@/components/BackButton').then((mod) => mod.BackButton),
);
const CopyKeyframes = dynamic(() =>
	import('@/components/CopyKeyframes').then((mod) => mod.CopyKeyframes),
);
const Button = dynamic(() => import('@/components/ui/Button').then((mod) => mod.Button));

export const generateStaticParams = async () =>
	Object.keys(LOADERS).map((key) => ({
		slug: key,
	}));

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const loaderCategories = Object.keys(LOADERS);
	const currentIndex = loaderCategories.indexOf(slug);
	const loader = LOADERS[slug as keyof typeof LOADERS] as LoaderProps;
	const nextLoader = loaderCategories[currentIndex + 1];
	const { speed, category, keyframes } = loader as LoaderProps;

	return (
		<>
			<section>
				<Hero title={slug} description={`The ${category.toLocaleLowerCase()} collection`}>
					<div className='z-50 flex flex-row items-center justify-between'>
						<BackButton />
						<Link href={`/${nextLoader}`}>
							<Button
								variant='tertiary'
								icon={<HiArrowRight size={16} />}
								aria-label='Next Loader'
							/>
						</Link>
					</div>
				</Hero>
			</section>
			<section className='w-full border border-x-0 border-b-0 border-t-neutral-800 p-6'>
				<div className='relative flex min-h-96 flex-col items-center justify-center overflow-hidden border border-neutral-800 bg-black p-6'>
					<div className='absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
					<span className='absolute top-4 left-4 text-neutral-50'>Preview</span>
					<CopyKeyframes
						code={keyframes}
						variant='secondary'
						copyText='Keyframes copied to clipboard!'
					/>
					<Renderer speed={speed} keyframes={keyframes} />
				</div>
				<div className='flex w-full flex-col'>
					<h1 className='mt-6 text-lg font-light text-neutral-50'>Installation</h1>
					<div className='pt-6'>
						<CodeBlock lang='bash' title='bash' code='npm install cli-loaders' />
					</div>

					<h1 className='mt-6 text-lg font-light text-neutral-50'>
						Importing the loader
					</h1>
					<div className='pt-6'>
						<CodeBlock lang='ts' title='example.ts'>
							{`import { initCliLoader } from 'cli-loaders';`}
						</CodeBlock>
					</div>

					<h1 className='mt-6 text-lg font-light text-neutral-50'>Initializing the Loader</h1>
					<div className='pt-6'>
						<CodeBlock lang='tsx' title='example.ts'>
							{`import { initCliLoader, ${slug} } from 'cli-loaders';

initCliLoader('${slug}'); // by name
initCliLoader(${slug}); // by object`}
						</CodeBlock>
					</div>

					<h1 className='mt-6 text-lg font-light text-neutral-50'>Customizations</h1>
					<div className='pt-6'>
						<CodeBlock lang='tsx' title='example.ts'>
							{`import { initCliLoader } from 'cli-loaders';

initCliLoader('${slug}', 100); // custom speed
initCliLoader('${slug}', 100, ["..", "."]); // custom speed and keyframes`}
						</CodeBlock>
					</div>

					<div className='pt-6'>
						<CodeBlock lang='tsx' title='example.ts'>
							{`import { initCliLoader } from 'cli-loaders';

const myAwesomeLoader = {
	speed: 100,
	keyframes: ["..", "."]
};

initCliLoader(myAwesomeLoader); // custom loader object`}
						</CodeBlock>
					</div>

					<h1 className='mt-6 text-lg font-light text-neutral-50'>Stopping a Loader</h1>
					<div className='pt-6'>
						<CodeBlock lang='tsx' title='example.ts'>
							{`import { initCliLoader } from 'cli-loaders';

const intervalId = initCliLoader('dots_1');

// Stop the loader after some time
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);`}
						</CodeBlock>
						<h1 className='mt-6 text-lg font-light text-neutral-50'>Examples</h1>
						<div className='pt-6'>
							<OhMyZshExample speed={speed} keyframes={keyframes} />
						</div>
						<div className='pt-6'>
							<NextJsComponentExample name={slug} />
						</div>
						<div className='pt-6'>
							<ZeroDependencyExample speed={speed} keyframes={keyframes} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
