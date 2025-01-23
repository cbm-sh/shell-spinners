import type { CardProps } from '@/types';
import { memo } from 'react';
import { CodeViewButton, CopyCodeButton } from './Buttons';

export const PreviewCard: React.FC<CardProps> = memo(({
    children,
    keyframes,
    slug,
    id,
    ...props
}) => {
    return (
        <div className='size-full relative flex items-center justify-center border border-neutral-800 bg-black px-8 py-32' {...props}>
            <div className='absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
            <div className='absolute left-4 top-4 text-sm text-neutral-50'>
                {id}
            </div>
            <CopyCodeButton code={keyframes} copyText='Keyframes copied to clipboard!' />
            <CodeViewButton slug={slug} />
            {children}
        </div>
    )
});

PreviewCard.displayName = 'PreviewCard';
