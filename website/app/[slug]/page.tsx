import { CodeBlock } from '@/components/CodeBlock';
import CLI_LOADERS from '@/lib/cli-loaders';
import { ComponentPlayground } from '@/components/ComponentPlayground';
import { BackButton } from '@/components/BackButton';
import { Share } from '@/components/Share';
import LOADER_JOKES from '@/lib/loader-jokes';
import CliLoader from '@/components/CliLoaderRenderer';

const cliLoader = CLI_LOADERS().map((loader) => loader);

export const generateStaticParams = async () => (
  cliLoader.map(({ name }) => ({
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
  const loader = cliLoader.find(
    ({ name }) => name === param.slug,
  );

  if (!loader) {
    return <div>Loader not found</div>;
  }

  const { name, keyframes, speed, category } = loader;

  const joke = LOADER_JOKES(name, category);

  const standardCliCode = `
  // Import the loader initializer
  import { initLoader } from 'cli-loaders';

  // Start the loader
  initLoader('${name}', ${speed});`;

  const customCliCode = `

  // Import the custom loader initializer
  import { initCustomLoader } from 'cli-loaders';

  initCustomLoader(YOUR_CUSTOM_SPEED, YOUR_CUSTOM_KEYFRAMES);
  // Example: initCustomLoader(100, [${keyframes.flatMap((keyframe) => `"${keyframe}",`).join('').slice(0, -1)}]);`;

  const zeroDependencyCliCode = `
  const initLoader = () => {
    // Set keyframes
    const keyframes = [${keyframes.flatMap((keyframe) => `"${keyframe}",`).join('').slice(0, -1)}];
    // Set speed in milliseconds
    const speed = ${speed};
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

  const ohMyZshPluginUsage = `
  function start_loader() {
    local keyframes=(${keyframes.flatMap((keyframe) => `"${keyframe}" `).join('').slice(0, -1)}) # Keyframes for the loader
    local speed=0.08 # // Speed at which the keyframes change
    local pid=$1 # PID of the process to wait for

    while kill -0 "$pid" 2>/dev/null; do
      for frame in "\${keyframes[@]}"; do
        printf "\\r%s %s" "$frame"
        sleep $speed
      done
    done

    # Clear the loader after the process completes
    printf "\\r%s\\n" "Done!"
  }

  function custom_loader() {
    # Example of using the loader with a background task
    (sleep 5) &  # Simulate a long-running task in the background
    start_loader $! # Call the loader with the PID of the background process
  }`;

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
      speed={${speed}} // Speed at which the keyframes change
      keyframes={[${keyframes.flatMap((keyframe) => `"${keyframe}",`).join('').slice(0, -1)}]} // Array of keyframes to display
      className="relative text-4xl font-mono flex flex-col justify-center items-center overflow-hidden" // CSS class for styling
    />
  );

  export default Page;`;

  return (
    <>
      <section>
        <div className='py-12 px-6'>
          <div className='absolute w-full max-w-5xl min-h-48 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
          <h1 className='text-balance relative z-40 font-semibold text-neutral-100 text-4xl md:text-5xl text-center'>
            {name} loader
          </h1>
          <p className='relative z-40 text-neutral-300 text-center py-6'>
            {joke[Math.floor(Math.random() * joke.length)]}
          </p>
        </div>
      </section>
      <section>
        <div className='px-6 pb-0 min-h-full'>
          <div className='flex flex-row justify-between items-center'>
        <BackButton />
            <Share
              className='flex justify-end items-end'
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
          <CodeBlock code={standardCliCode} lang='ts' title='Standard' />
          <CodeBlock code={customCliCode} lang='ts' title='Custom' isV2 />
          <CodeBlock code={zeroDependencyCliCode} lang='ts' title='Zero Dependency' />
          <p className='text-sm font-light text-neutral-400'>Usage in Oh My Zsh</p>
          <CodeBlock code={ohMyZshPluginUsage} lang='shell' title='loader.plugin.zsh' />
          <p className='text-sm font-light text-neutral-400'>Usage in Next.js</p>
          <CodeBlock code={nextJsComponentCode} lang='tsx' title='components/LoaderComponent.tsx' />
          <CodeBlock code={nextJsComponentCodeUsage} lang='tsx' title='page.tsx' />
        </div>
      </section>
    </>
  );
};

export default ComponentPage;
