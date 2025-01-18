import { CodeBlock } from '@/components/CodeBlock';
import ALL_LOADERS from '@/lib/all-loaders';
import { ComponentPlayground } from '@/components/ComponentPlayground';
import { BackButton } from '@/components/BackButton';
import { CliLoader } from '@/components/CliLoader';
import { Share } from '@/components/Share';

export const generateStaticParams = async () => (
  ALL_LOADERS.map(({ name }) => ({
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
  const loader = ALL_LOADERS.find(
    ({ name }) => name === param.slug,
  );

  if (!loader) {
    return <div>Loader not found</div>;
  }

  const standardCliCode = `
  // Import the loader initializer
  import { initLoader } from 'cli-loaders';

  // Start the loader
  initLoader('${loader.name}', ${loader.speed});`;

  const customCliCode = `

  // Import the custom loader initializer
  import { initCustomLoader } from 'cli-loaders';

  initCustomLoader(YOUR_CUSTOM_SPEED, YOUR_CUSTOM_KEYFRAMES);
  // Example: initCustomLoader(100, [${loader.keyframes.flatMap((keyframe) => `"${keyframe}",`).join('')}]);`;

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

  const nextJsComponentCode = `

"use client";

import React, { useEffect, useState } from 'react';

// Define the props for the LoaderComponent
type LoaderComponentProps = {
  speed: number; // Speed at which the keyframes change
  keyframes: string[]; // Array of keyframes to display
  className?: string; // Optional CSS class for styling
};

// Define the LoaderComponent as a functional React component
export const LoaderComponent: React.FC<LoaderComponentProps> = ({ speed, keyframes, className }) => {
  // Initialize state to keep track of the current frame
  const [currentFrame, setCurrentFrame] = useState(keyframes[0]);

  // useEffect hook to handle the interval for changing frames
  useEffect(() => {
    let index = 0;

    // Set up an interval to update the current frame at the specified speed
    const interval = setInterval(() => {
      setCurrentFrame(keyframes[index]);
      index = (index + 1) % keyframes.length; // Loop back to the start when reaching the end
    }, speed);

    // Clean up the interval when the component is unmounted or dependencies change
    return () => clearInterval(interval);
  }, [keyframes, speed]);

  // Render the current frame inside a div with the optional className
  return (
    <div className={className}>{currentFrame}</div>
  );
};`;

// Example usage of the LoaderComponent in a Next.js page
const nextJsComponentCodeUsage = `
// import the LoaderComponent
import { LoaderComponent } from "@/components/LoaderComponent";

// Define the Page component
const Page = () => (
  // Render the LoaderComponent with the specified props
  <LoaderComponent
    speed={${loader.speed}} // Speed at which the keyframes change
    keyframes={[${loader.keyframes.flatMap((keyframe) => `"${keyframe}",`).join('').slice(0, -1)}]} // Array of keyframes to display
    className="relative text-4xl font-mono flex flex-col justify-center items-center overflow-hidden" // CSS class for styling
  />
);

export default Page;`;

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
        <h1 className='text-md font-light text-neutral-400'>Examples</h1>
          <CodeBlock code={standardCliCode} lang='ts' title='Standard Initialization'/>
          <CodeBlock code={customCliCode} lang='ts' title='Custom Initialization' isV2/>
          <CodeBlock code={zeroDependencyCliCode} lang='ts' title='Zero Dependency Initialization'/>
          <p className='text-sm font-light text-neutral-400'>Usage in Next.js</p>
          <CodeBlock code={nextJsComponentCode} lang='tsx' title='components/LoaderComponent.tsx'/>
          <CodeBlock code={nextJsComponentCodeUsage} lang='tsx' title='page.tsx'/>
        <h1 className='text-center text-md font-light text-neutral-400'>Share Loader</h1>
        <Share
        className='flex justify-center'
          title={loader.category}
          url={`https://cliloaders.com/${loader.name}`}
          description='Check out this CLI loader!'
          />
      </div>
      </div>
    </div>
  );
};

export default ComponentPage;
