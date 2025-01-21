import { memoize } from '@/lib/utils';

const codeUsages: Record<string, CodeUsage> = {
	standardCLI: {
		title: 'Standard CLI Usage',
		code: ({ name, speed }) =>
			`// Import the loader initializer
import { initLoader } from 'cli-loaders';

// Start the loader
initLoader('${name}', ${speed});`,
	},
	customCLI: {
		title: 'Custom CLI Usage',
		code: ({ keyframes }) =>
			`// Import the custom loader initializer
import { initCustomLoader } from 'cli-loaders';

initCustomLoader(YOUR_CUSTOM_SPEED, YOUR_CUSTOM_KEYFRAMES);
// Example: initCustomLoader(100, [${keyframes?.map((keyframe) => `"${keyframe}"`).join(', ')}]);`,
	},
	zeroDependency: {
		title: 'Zero Dependency Usage',
		code: ({ speed, keyframes }) =>
			`const initLoader = () => {
    // Set keyframes
    const keyframes = [${keyframes?.map((keyframe) => `"${keyframe}"`).join(', ')}];
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
	},
	ohMyZsh: {
		title: 'Oh My Zsh Plugin Usage',
		code: ({ keyframes }) =>
			`function start_loader() {
    local keyframes=(${keyframes?.map((keyframe) => `"${keyframe}"`).join(' ')}) # Keyframes for the loader
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
	},
	nextJS: {
		title: 'Usage in Next.js',
		code: () =>
			`"use client";

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
	},
	nextJSComponent: {
		title: 'Next.js Component Code Usage',
		code: ({ speed, keyframes }) =>
			`import { LoaderComponent } from "@/components/LoaderComponent";

const Page = () => (
    <LoaderComponent
        speed={${speed}}
        keyframes={[${keyframes?.map((keyframe) => `"${keyframe}"`).join(', ')}]}
        className="relative text-4xl font-mono flex flex-col justify-center items-center overflow-hidden"
    />
);

export default Page;`,
	},
};

const getCodeUsage = memoize(
	(
		name: CliLoaderProps['name'],
		speed: CliLoaderProps['speed'],
		keyframes: CliLoaderProps['keyframes'],
	) => {
		return Object.values(codeUsages).map((usage) => ({
			title: usage.title,
			code: usage.code({ name, speed, keyframes }),
		}));
	},
);

export default getCodeUsage;
