import type { LoaderProps } from '@/types';
import { memo, useMemo } from 'react';
import { CodeBlock } from './CodeBlock';

export const StandardExample = memo(({ name, speed }: Partial<LoaderProps>) => {
	const title = 'Standard CLI Example';
	const code = useMemo(
		() => `// Import the loader initializer
import { initLoader } from 'cli-loaders';

// Start the loader
initLoader('${name}', ${speed});`,
		[name, speed],
	);

	return <CodeBlock title={title} code={code} />;
});

StandardExample.displayName = 'StandardExample';

export const CustomExample = memo(({ keyframes }: Partial<LoaderProps>) => {
	const title = 'Custom CLI Example';
	const code = useMemo(
		() => `// Import the custom loader initializer
import { initCustomLoader } from 'cli-loaders';

initCustomLoader(YOUR_CUSTOM_SPEED, YOUR_CUSTOM_KEYFRAMES);
// Example: initCustomLoader(100, [${keyframes?.map((keyframe) => `"${keyframe}"`).join(', ')}]);`,
		[keyframes],
	);

	return <CodeBlock title={title} code={code} isV2 />;
});

CustomExample.displayName = 'CustomExample';

export const ZeroDependencyExample = memo(
	({ speed, keyframes }: Partial<LoaderProps>) => {
		const title = 'Zero Dependency Example';
		const code = useMemo(
			() => `const initLoader = () => {
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
			[speed, keyframes],
		);

		return <CodeBlock title={title} code={code} />;
	},
);

ZeroDependencyExample.displayName = 'ZeroDependencyExample';

export const OhMyZshExample = memo(({ speed, keyframes }: Partial<LoaderProps>) => {
	const title = 'Oh My Zsh Example';
	const code = useMemo(
		() => `function start_loader() {
    local keyframes=(${keyframes?.map((keyframe) => `"${keyframe}"`).join(' ')}) # Keyframes for the loader
    local speed=${speed} # Speed at which the keyframes change
    local pname=$1 # PID of the process to wait for

    while kill -0 "$pname" 2>/dev/null; do
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
		[speed, keyframes],
	);

	return <CodeBlock title={title} code={code} />;
});

OhMyZshExample.displayName = 'OhMyZshExample';

export const NextJsExample = memo(() => {
	const title = 'Next.js Example';
	const code = useMemo(
		() => `"use client";

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
		[],
	);

	return <CodeBlock title={title} code={code} />;
});

NextJsExample.displayName = 'NextJsExample';

export const NextJsComponentExample = memo(
	({ speed, keyframes }: Partial<LoaderProps>) => {
		const title = 'Next.js Component Example';
		const code = useMemo(
			() => `import { LoaderComponent } from "@/components/LoaderComponent";

const Page = () => (
    <LoaderComponent
        speed={${speed}}
        keyframes={[${keyframes?.map((keyframe) => `"${keyframe}"`).join(', ')}]}
        className="relative text-4xl font-mono flex flex-col justify-center items-center overflow-hnameden"
    />
);

export default Page;`,
			[speed, keyframes],
		);

		return <CodeBlock title={title} code={code} />;
	},
);

NextJsComponentExample.displayName = 'NextJsComponentExample';
