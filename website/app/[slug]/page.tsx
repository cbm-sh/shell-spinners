import { CodeBlock } from '@/components/CodeBlock';
import { ComponentPlayground } from '@/components/ComponentPlayground';
import { BackButton } from '@/components/BackButton';
import { Share } from '@/components/Share';
import CliLoader from '@/components/CliLoaderRenderer';
import getCliLoaders from '@/lib/get-cli-loaders';
import getLoaderJokes from '@/lib/get-loader-jokes';
import getCodeUsage from '@/lib/get-code-usage';
import { title } from 'process';

export const generateStaticParams = async () => (
  getCliLoaders().map(({ name }) => ({
    slug: name,
  }))
);

export const dynamicParams = false;

const ComponentPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const param = await params;
  const loader = getCliLoaders().find(
    ({ name }) => name === param.slug,
  );

  if (!loader) {
    return <div>Loader not found</div>;
  }

  const { name, keyframes, speed, category } = loader;

  const loaderJokes = getLoaderJokes(name, category);

  const codeUsages = getCodeUsage(name, speed, keyframes);

  const standardCliCode = codeUsages.find((code) => code.title === 'Standard CLI Usage');
  const customCliCode = codeUsages.find((code) => code.title === 'Custom CLI Usage');
  const zeroDependencyCliCode = codeUsages.find((code) => code.title === 'Zero Dependency Usage');
  const ohMyZshPluginUsage = codeUsages.find((code) => code.title === 'Oh My Zsh Plugin Usage');
  const nextJsComponentCode = codeUsages.find((code) => code.title === 'Usage in Next.js');
  const nextJsComponentCodeUsage = codeUsages.find((code) => code.title === 'Next.js Component Code Usage');

  return (
    <>
      <section>
        <div className='py-12 px-6'>
          <div className='absolute w-full max-w-5xl min-h-48 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
          <h1 className='text-balance relative z-40 font-semibold text-neutral-100 text-4xl md:text-5xl text-center'>
            {name} loader
          </h1>
          <p className='relative z-40 text-neutral-300 text-center py-6'>
            {loaderJokes[Math.floor(Math.random() * loaderJokes.length)]}
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
        <ComponentPlayground>
          <CliLoader
            speed={speed}
            keyframes={keyframes}
            category={category}
          />
        </ComponentPlayground>
        <div className='mt-6 space-y-6'>
          <h1 className='text-md font-light text-neutral-400'>Examples</h1>
          <CodeBlock code={standardCliCode?.code!} lang='ts' title={standardCliCode?.title!} />
          <CodeBlock code={customCliCode?.code!} lang='ts' title={customCliCode?.title!} isV2 />
          <CodeBlock code={zeroDependencyCliCode?.code!} lang='ts' title={zeroDependencyCliCode?.title!} />
          <p className='text-sm font-light text-neutral-400'>Usage in Oh My Zsh</p>
          <CodeBlock code={ohMyZshPluginUsage?.code!} lang='shell' title={ohMyZshPluginUsage?.title!} />
          <p className='text-sm font-light text-neutral-400'>Usage in Next.js</p>
          <CodeBlock code={nextJsComponentCode?.code!} lang='tsx' title={nextJsComponentCode?.title!} />
          <CodeBlock code={nextJsComponentCodeUsage?.code!} lang='tsx' title={nextJsComponentCodeUsage?.title!} />
        </div>
      </section>
    </>
  );
};

export default ComponentPage;
