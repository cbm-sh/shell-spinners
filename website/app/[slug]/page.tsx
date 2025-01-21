import { CodeBlock } from '@/components/CodeBlock';
import { ComponentPlayground } from '@/components/ComponentPlayground';
import { BackButton } from '@/components/Buttons';
import getCliLoaders from '@/lib/get-cli-loaders';
import getLoaderJokes from '@/lib/get-loader-jokes';
import getCodeUsage from '@/lib/get-code-usage';
import dynamic from 'next/dynamic';

const Share = dynamic(() => import('@/components/Share').then((mod) => mod.default), { ssr: true });
const CliRenderer = dynamic(() => import('@/components/CliLoaderRenderer').then((mod) => mod.default), { ssr: true });

export const generateStaticParams = async () => (
  getCliLoaders().map(({ name }: { name: string }) => ({
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
    ({ name }: { name: string }) => name === param.slug,
  );

  if (!loader) {
    return <div>Loader not found</div>;
  }

  const { name, keyframes, speed, category } = loader;

  const joke = getLoaderJokes(name, category);

  const code = getCodeUsage(name, speed, keyframes);

  const standard = code.find((example) => example.title === 'Standard CLI Usage');
  const custom = code.find((example) => example.title === 'Custom CLI Usage');
  const zeroDependency = code.find((example) => example.title === 'Zero Dependency Usage');
  const ohMyZsh = code.find((example) => example.title === 'Oh My Zsh Plugin Usage');
  const nextJs = code.find((example) => example.title === 'Usage in Next.js');
  const nextJsUsage = code.find((example) => example.title === 'Next.js Component Code Usage');

  if (!standard || !custom || !zeroDependency || !ohMyZsh || !nextJs || !nextJsUsage) {
    return <div>Code not found</div>;
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
            {joke}
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
          <CliRenderer
            speed={speed}
            keyframes={keyframes}
            category={category}
          />
        </ComponentPlayground>
        <div className='mt-6 space-y-6'>
          <h1 className='text-md font-light text-neutral-400'>Examples</h1>
          <CodeBlock code={standard.code} lang='ts' title={standard.title} />
          <CodeBlock code={custom.code} lang='ts' title={custom.title} isV2 />
          <CodeBlock code={zeroDependency.code} lang='ts' title={zeroDependency.title} />
          <p className='text-sm font-light text-neutral-400'>Usage in Oh My Zsh</p>
          <CodeBlock code={ohMyZsh.code} lang='shell' title={ohMyZsh.title} />
          <p className='text-sm font-light text-neutral-400'>Usage in Next.js</p>
          <CodeBlock code={nextJs.code} lang='tsx' title={nextJs.title} />
          <CodeBlock code={nextJsUsage.code} lang='tsx' title={nextJsUsage.title} />
        </div>
      </section>
    </>
  );
};

export default ComponentPage;
