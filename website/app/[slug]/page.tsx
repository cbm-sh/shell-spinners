import CodeBlock from '@/components/CodeBlock';
import ALL_LOADERS from '@/lib/all-loaders';
import { ComponentPlayground } from '@/components/ComponentPlayground';
import { BackButton } from '@/components/BackButton';
import { CliLoader } from '@/components/CliLoader';

export async function generateStaticParams() {
  return ALL_LOADERS.map(({ name }) => ({
    slug: name,
  }));
}

export const dynamicParams = false;

const ComponentPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const param = await params;
  const loader = ALL_LOADERS.find(
    ({ name }) => name === param.slug,
  );

  if (!loader) {
    return <div>Loader not found</div>;
  }

  const standardCliCode = `

  import { initLoader } from 'cli-loaders';

  initLoader('${loader.name}', ${loader.speed});`;

  const zeroDependencyCliCode = `

  const initLoader = () => {
    // Set keyframes
    const keyframes = [${loader.keyframes.flatMap((keyframe) => `"${keyframe}",`).join('').slice(0, -1)}];
    // Set speed in milliseconds
    const speed = ${loader.speed};
    // Start at the first keyframe
    let index = 0;
    // Set interval to change keyframes
    setInterval(() => {
      process.stdout.write("\\r" + keyframes[index]);
      index = (index + 1) % keyframes.length;
    }, speed);
  };
    // Start the loader
    initLoader();`;

  const customCliCode = `

  // Import the custom loader initializer
  import { initCustomLoader } from 'cli-loaders';

  initCustomLoader(YOUR_CUSTOM_SPEED, YOUR_CUSTOM_KEYFRAMES);
  // Example: initCustomLoader(100, ['😀', '😃', '😄', '😁', '😆']);`;
  return (
    <div className='p-6 space-y-6 min-h-screen'>
      <div className='flex flex-row justify-between items-center'>
        <BackButton />
        <h1 className='text-md font-light text-neutral-400'>
          {loader.name}
        </h1>
      </div>
      <div className='w-full'>
        <ComponentPlayground>
          <CliLoader keyframes={loader.keyframes} speed={loader.speed} />
        </ComponentPlayground>
        <div className='mt-6 space-y-6'>
          <CodeBlock code={standardCliCode} lang='ts' title='Standard Initialization'/>
          <CodeBlock code={customCliCode} lang='ts' title='Custom Initialization' isV2/>
          <CodeBlock code={zeroDependencyCliCode} lang='ts' title='Zero Dependency Initialization'/>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
