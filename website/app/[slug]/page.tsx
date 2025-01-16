import CodeBlock from '@/components/CodeBlock';
import allLoaders from '@/lib/all-loaders';
import { ComponentPlayground } from '@/components/ComponentPlayground';
import { BackButton } from '@/components/BackButton';
import { CliLoader } from '@/components/CliLoader';

export async function generateStaticParams() {
  return allLoaders.map(({ name }) => ({
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
  const loader = allLoaders.find(
    ({ name }) => name === param.slug,
  );

  if (!loader) {
    return <div>Loader not found</div>;
  }

const manualCliCode = `

const loaderExample = () => {
  // Copied keyframes
  const keyframes = [${loader.keyframes.flatMap(l => `"${l}",`).join('')}];
  const speed = 100;
  let index = 0;

  const interval = setInterval(() => {
    // Clear the console
    console.clear();

    // Print the current keyframe
    console.log(keyframes[index]);

    // Increment the index
    index = (index + 1) % keyframes.length;
  }, speed);

  // Clear the interval after 5 seconds
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);

};

loaderExample();
`;

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
        <div className='mt-6'>
          <CodeBlock code={manualCliCode} lang='ts' title='Cli Loader Example'/>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
