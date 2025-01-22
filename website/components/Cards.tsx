import type { CardProps, ExampleCardProps } from '@/types';
import dynamic from 'next/dynamic';
import { memo } from 'react';

const CodeViewButton = dynamic(() => import('./Buttons').then(mod => mod.CodeViewButton));
const CopyCodeButton = dynamic(() => import('./Buttons').then(mod => mod.CopyCodeButton));

export const PreviewCard: React.FC<CardProps> = memo(({
    children,
    keyframes,
    slug,
    name,
    ...props
}) => {
    return (
        <div className='size-full relative flex items-center justify-center border border-neutral-800 bg-black px-8 py-32' {...props}>
            <div className='absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
            <div className='absolute left-4 top-4 text-sm text-neutral-50'>
                {name}
            </div>
            <CopyCodeButton code={keyframes} />
            <CodeViewButton slug={slug} />
            {children}
        </div>
    )
});

PreviewCard.displayName = 'PreviewCard';


export const ExampleCard: React.FC<ExampleCardProps> = memo(({
    title,
    code,
    isV2,
    ...props
}) => {
    return (
        <div className='relative p-4 w-full min-h-fit max-w-5xl flex flex-col items-start justify-start border border-neutral-800 bg-black' {...props}>
            <div className='absolute left-4 top-4 text-sm text-neutral-50'>
                {title}{isV2 && (<span className='absolute bg-blue-600 border border-blue-500 inline-flex w-auto px-0.5 py-0 ml-[4px] h-auto text-xs text-white'>v2.0+</span>)}
            </div>
            <pre className='flex flex-col justify-center items-start pt-10 pb-3 font-mono whitespace-pre-wrap text-neutral-300 break-normal'>
                {code}
                </pre>
            <CopyCodeButton code={code} />
        </div>
    )
});

ExampleCard.displayName = 'ExampleCard';