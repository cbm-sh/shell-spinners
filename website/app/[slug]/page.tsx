
import { CustomExample, NextJsComponentExample, NextJsExample, OhMyZshExample, StandardExample, ZeroDependencyExample } from '@/components/CodeExamples';
import { ComponentView } from '@/components/ComponentView';
import getCliLoaders from '@/lib/get-cli-loaders';
import getLoaderJokes from '@/lib/get-loader-jokes';
import { type CliLoaderProps } from '@/types';
import dynamic from 'next/dynamic';

export const generateStaticParams = async () => (
  getCliLoaders().map(({ name }: { name: string }) => ({
    slug: name,
  }))
);

const ComponentViewPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const param = await params;
  const loader: CliLoaderProps | undefined = getCliLoaders().find(
    ({ name }: { name: string }) => name === param.slug,
  );

  if (!loader) {
    return <div>Loader not found</div>;
  }

  const { name, keyframes, speed, category } = loader;

  const DynamicBackButton = dynamic(() => import('@/components/Buttons').then((mod) => mod.BackButton), { ssr: true });
  const DynamicShare = dynamic(() => import('@/components/Share').then((mod) => mod.Share), { ssr: true });
  const DynamicCliLoaderRenderer = dynamic(() => import('@/components/CliLoaderRenderer').then((mod) => mod.CliLoaderRenderer), { ssr: true });

  return (
    <>
      <section>
        <div className='py-12 px-6'>
          <div className='absolute w-full max-w-5xl min-h-48 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
          <h1 className='text-balance relative z-40 font-semibold text-neutral-100 text-4xl md:text-5xl text-center'>
            {name} loader
          </h1>
          <p className='relative z-40 text-neutral-300 text-center py-6'>
            {getLoaderJokes(name, category)}
          </p>
        </div>
      </section>
      <section>
        <div className='px-6 pb-0 min-h-full'>
          <div className='flex flex-row justify-between items-center'>
            <DynamicBackButton />
            <DynamicShare
              className='z-40 flex justify-end items-end'
              title={category as string}
              url={`https://cliloaders.com/${name}`}
              description={`It's an awesome ${category.toLocaleLowerCase()} loader!`}
            />
          </div>
        </div>
      </section>
      <section className='w-full p-6'>
        <ComponentView>
          <DynamicCliLoaderRenderer
            speed={speed}
            keyframes={keyframes}
            category={category}
          />
        </ComponentView>
        <div className='mt-6 space-y-6'>
          <h1 className='text-md font-light text-neutral-400'>Examples</h1>
          <StandardExample name={name} speed={speed} />
          <CustomExample name={name} speed={speed} keyframes={keyframes} />
          <ZeroDependencyExample name={name} speed={speed} />
          <p className='text-sm font-light text-neutral-400'>Usage in Oh My Zsh</p>
          <OhMyZshExample name={name} speed={speed} />
          <p className='text-sm font-light text-neutral-400'>Usage in Next.js</p>
          <NextJsExample name={name} speed={speed} />
          <NextJsComponentExample name={name} speed={speed} keyframes={keyframes} />
        </div>
      </section>
    </>
  );
};

export default ComponentViewPage;