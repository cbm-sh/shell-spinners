import { getJokes } from '@/lib/get-jokes';
import {
  getLoaderByName,
  getLoaders,
  getLoadersByCategory
} from '@/lib/get-loaders';
import type { LoaderProps } from '@/types';
import dynamic from 'next/dynamic';
import { memo } from 'react';

const BackButton = dynamic(() => import('@/components/Buttons').then(mod => mod.BackButton));
const CustomExample = dynamic(() => import('@/components/Examples').then(mod => mod.CustomExample));
const NextJsComponentExample = dynamic(() => import('@/components/Examples').then(mod => mod.NextJsComponentExample));
const NextJsExample = dynamic(() => import('@/components/Examples').then(mod => mod.NextJsExample));
const OhMyZshExample = dynamic(() => import('@/components/Examples').then(mod => mod.OhMyZshExample));
const StandardExample = dynamic(() => import('@/components/Examples').then(mod => mod.StandardExample));
const ZeroDependencyExample = dynamic(() => import('@/components/Examples').then(mod => mod.ZeroDependencyExample));
const Renderer = dynamic(() => import('@/components/Renderer').then(mod => mod.Renderer));
const Share = dynamic(() => import('@/components/Share').then(mod => mod.Share));
const View = dynamic(() => import('@/components/View').then(mod => mod.View));

export const generateStaticParams = async () => (
  getLoaders().map(({ name }: { name: string }) => ({
    slug: name,
  }))
);

const ViewPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const param = await params;
  const loader: LoaderProps | undefined = getLoaderByName(param.slug);

  if (!loader) {
    return <div>Loader not found</div>;
  }

  const jokes = getJokes(loader.name, loader.category as string);

  const chosenLoader = getLoadersByCategory(loader.category as string).find(({ name }) => name === param.slug);

  return (
    <>
      <section>
        <div className='py-12 px-6'>
          <div className='absolute w-full max-w-5xl min-h-48 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
          <h1 className='text-balance relative font-semibold text-neutral-100 text-4xl md:text-5xl text-center'>
            {chosenLoader?.name} loader
          </h1>
          <p className='relative z-40 text-neutral-300 text-center py-6'>
            {jokes}
          </p>
        </div>
      </section>
      <section>
        <div className='px-6 pb-0 min-h-full'>
          <div className='flex flex-row justify-between items-center'>
            <BackButton />
            <Share
              className='z-40 flex justify-end items-end'
              title={chosenLoader?.category as string}
              url={`https://cliloaders.com/${chosenLoader?.name}`}
              description={`It's an awesome ${chosenLoader?.category?.toLocaleLowerCase()} loader!`}
            />
          </div>
        </div>
      </section>
      <section className='w-full p-6'>
        <View>
          <Renderer
            speed={chosenLoader?.speed as number}
            keyframes={chosenLoader?.keyframes as string[]}
            category={chosenLoader?.category}
          />
        </View>
        <div className='mt-6 space-y-6'>
          <h1 className='text-md font-light text-neutral-400'>Examples</h1>
          <StandardExample name={chosenLoader?.name} speed={chosenLoader?.speed} />
          <CustomExample keyframes={chosenLoader?.keyframes} />
          <ZeroDependencyExample speed={chosenLoader?.speed} keyframes={chosenLoader?.keyframes} />
          <p className='text-sm font-light text-neutral-400'>Usage in Oh My Zsh</p>
          <OhMyZshExample speed={chosenLoader?.speed} keyframes={chosenLoader?.keyframes} />
          <p className='text-sm font-light text-neutral-400'>Usage in Next.js</p>
          <NextJsExample />
          <NextJsComponentExample speed={chosenLoader?.speed} keyframes={chosenLoader?.keyframes} />
        </div>
      </section>
    </>
  );
};

export default memo(ViewPage);