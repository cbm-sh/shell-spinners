import type { ExampleCardProps } from '@/types';
import { memo, useMemo } from 'react';
import { CopyCodeButton } from './Buttons';

export const ExampleCard: React.FC<ExampleCardProps> = memo(({
    title,
    code,
    isV2
}) => {
    console.log('ExampleCard called!');
    return (
        <div className='size-full relative flex items-center justify-center border border-neutral-800 bg-black px-8 py-32'>
            <div className='absolute left-4 top-4 text-sm text-neutral-50'>
                {title}{isV2 && (<span className='absolute bg-blue-600 border border-blue-500 inline-flex w-auto px-0.5 py-0 ml-[4px] h-auto text-xs text-white'>v2.0+</span>)}
            </div>
            <CopyCodeButton code={code} />
        </div>
    )
});

ExampleCard.displayName = 'ExampleCard';

export const StandardExample = memo(({ name, speed }: { name: string; speed: number }) => {
    const title = 'Standard CLI Example';
    const code = useMemo(() => (
        `// Import the loader initializer
import { initLoader } from 'cli-loaders';

// Start the loader
initLoader('${name}', ${speed});
`
    ), [name, speed]);

    return (
        <ExampleCard title={title} code={code} />
    );
});

StandardExample.displayName = 'StandardExample';

export const CustomExample = memo(({ name, speed, keyframes }: { name: string; speed: number; keyframes: string[] }) => {
    const title = 'Custom CLI Example';
    const code = useMemo(() => (
        `// Import the loader initializer
import { initLoader } from 'cli-loaders';

// Define custom keyframes
const customKeyframes = [${keyframes.map(kf => `'${kf}'`).join(', ')}];

// Start the loader with custom keyframes
initLoader('${name}', ${speed}, customKeyframes);
`
    ), [name, speed, keyframes]);

    return (
        <ExampleCard title={title} code={code} isV2 />
    );
});

CustomExample.displayName = 'CustomExample';

export const ZeroDependencyExample = memo(({ name, speed }: { name: string; speed: number }) => {
    const title = 'Zero Dependency Example';
    const code = useMemo(() => (
        `// Import the loader initializer
import { initLoader } from 'cli-loaders/zero-dependency';

// Start the loader
initLoader('${name}', ${speed});
`
    ), [name, speed]);

    return (
        <ExampleCard title={title} code={code} />
    );
});

ZeroDependencyExample.displayName = 'ZeroDependencyExample';

export const OhMyZshExample = memo(({ name, speed }: { name: string; speed: number }) => {
    const title = 'Oh My Zsh Example';
    const code = useMemo(() => (
        `# Add the following to your .zshrc file
plugins=(... cli-loaders)

# Start the loader
initLoader '${name}' ${speed}
`
    ), [name, speed]);

    return (
        <ExampleCard title={title} code={code} />
    );
});

OhMyZshExample.displayName = 'OhMyZshExample';

export const NextJsExample = memo(({ name, speed }: { name: string; speed: number }) => {
    const title = 'Next.js Example';
    const code = useMemo(() => (
        `// Import the loader initializer
import { initLoader } from 'cli-loaders';

// Start the loader in a Next.js component
const LoaderComponent = () => {
    useEffect(() => {
        initLoader('${name}', ${speed});
    }, []);

    return <div>Loading...</div>;
};

export default LoaderComponent;
`
    ), [name, speed]);

    return (
        <ExampleCard title={title} code={code} />
    );
});

NextJsExample.displayName = 'NextJsExample';

export const NextJsComponentExample = memo(({ name, speed, keyframes }: { name: string; speed: number; keyframes: string[] }) => {
    const title = 'Next.js Component Example';
    const code = useMemo(() => (
        `// Import the loader initializer
import { initLoader } from 'cli-loaders';

// Define custom keyframes
const customKeyframes = [${keyframes.map(kf => `'${kf}'`).join(', ')}];

// Start the loader in a Next.js component
const LoaderComponent = () => {
    useEffect(() => {
        initLoader('${name}', ${speed}, customKeyframes);
    }, []);

    return <div>Loading...</div>;
};

export default LoaderComponent;
`
    ), [name, speed, keyframes]);

    return (
        <ExampleCard title={title} code={code} />
    );
});

NextJsComponentExample.displayName = 'NextJsComponentExample';