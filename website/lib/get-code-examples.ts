import { memoize } from '@/lib/utils';

export const standardExample = memoize(({ name, speed }: { name: string; speed: number }) => ({
    title: 'Standard CLI Example',
    code: `// Import the loader initializer
import { initLoader } from 'cli-loaders';

// Start the loader
initLoader('${name}', ${speed});`,
}));

export const customExample = memoize(({ keyframes }: { keyframes: string[] }) => ({
    title: 'Custom CLI Example',
    code: `// Import the custom loader initializer
import { initCustomLoader } from 'cli-loaders';

initCustomLoader(YOUR_CUSTOM_SPEED, YOUR_CUSTOM_KEYFRAMES);
// Example: initCustomLoader(100, [${keyframes.map((keyframe) => `"${keyframe}"`).join(', ')}]);`,
}));

export const zeroDependencyExample = memoize(({ speed, keyframes }: { speed: number; keyframes: string[] }) => ({
    title: 'Zero Dependency Example',
    code: `const initLoader = () => {
    // Set keyframes
    const keyframes = [${keyframes.map((keyframe) => `"${keyframe}"`).join(', ')}];
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
initLoader();`,
}));

export const ohMyZshExample = memoize(({ keyframes }: { keyframes: string[] }) => ({
    title: 'Oh My Zsh Plugin Example',
    code: `function start_loader() {
    local keyframes=(${keyframes.map((keyframe) => `"${keyframe}"`).join(' ')}) # Keyframes for the loader
    local speed=0.08 # Speed at which the keyframes change
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
}`,
}));

export const nextJsExample = memoize(() => ({
    title: 'Example in Next.js',
    code: `"use client";

import React, { useEffect, useState } from 'react';

type LoaderComponentProps = {
    speed: number;
    keyframes: string[];
    className?: string;
};

export const LoaderComponent: React.FC<LoaderComponentProps> = ({ speed, keyframes, className }) => {
    const [currentFrame, setCurrentFrame] = useState(keyframes[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setCurrentFrame(keyframes[index]);
            index = (index + 1) % keyframes.length;
        }, speed);

        return () => clearInterval(interval);
    }, [keyframes, speed]);

    return (
        <div className={className}>{currentFrame}</div>
    );
};`,
}));

export const nextJsComponentExample = memoize(({ speed, keyframes }: { speed: number; keyframes: string[] }) => ({
    title: 'Next.js Component Code Example',
    code: `import { LoaderComponent } from "@/components/LoaderComponent";

const Page = () => (
    <LoaderComponent
        speed={${speed}}
        keyframes={[${keyframes.map((keyframe) => `"${keyframe}"`).join(', ')}]}
        className="relative text-4xl font-mono flex flex-col justify-center items-center overflow-hidden"
    />
);

export default Page;`,
}));