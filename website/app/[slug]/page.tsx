
import { BackButton } from '@/components/Buttons';
import { CustomExample, NextJsComponentExample, NextJsExample, OhMyZshExample, StandardExample, ZeroDependencyExample } from '@/components/Examples';
import { Renderer } from '@/components/Renderer';
import { Share } from '@/components/Share';
import { View } from '@/components/View';
import { getJokes } from '@/lib/get-jokes';
import { getLoaders } from '@/lib/get-loaders';
import type { LoaderProps } from '@/types';

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
  const loader: LoaderProps | undefined = getLoaders().find(
    ({ name }: { name: string }) => name === param.slug,
  );

  if (!loader) {
    return <div>Loader not found</div>;
  }

  const { name, keyframes, speed, category } = loader;

  if (!CustomExample || !NextJsComponentExample || !NextJsExample || !OhMyZshExample || !StandardExample || !ZeroDependencyExample) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <div className='py-12 px-6'>
          <div className='absolute w-full max-w-5xl min-h-48 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
          <h1 className='text-balance relative z-40 font-semibold text-neutral-100 text-4xl md:text-5xl text-center'>
            {name} loader
          </h1>
          <p className='relative z-40 text-neutral-300 text-center py-6'>
            {getJokes(name as string, category as string)}
          </p>
        </div>
      </section>
      <section>
        <div className='px-6 pb-0 min-h-full'>
          <div className='flex flex-row justify-between items-center'>
            <BackButton />
            <Share
              className='z-40 flex justify-end items-end'
              title={category as string}
              url={`https://cliloaders.com/${name}`}
              description={`It's an awesome ${category?.toLocaleLowerCase()} loader!`}
            />
          </div>
        </div>
      </section>
      <section className='w-full p-6'>
        <View>
          <Renderer
            speed={speed}
            keyframes={keyframes}
            category={category}
          />
        </View>
        <div className='mt-6 space-y-6'>
          <h1 className='text-md font-light text-neutral-400'>Examples</h1>
          <StandardExample name={name} speed={speed} />
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

export default ViewPage;