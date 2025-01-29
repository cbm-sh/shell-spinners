'use client';

import { useToast } from '@/hooks/use-toast';
import type { CopyButtonProps } from '@/types';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { memo, useCallback, useState } from 'react';
import { TbKeyframe } from 'react-icons/tb';
import { Button } from './ui/Button';

export const CopyButton = memo(
	({ hasKeyframes, variant, className, code, copyText }: CopyButtonProps) => {
		const { addToast } = useToast();
		const [hasCheckIcon, setHasCheckIcon] = useState(false);

		const handleMouseDown = useCallback(() => {
			navigator.clipboard.writeText(code as string);
			setHasCheckIcon(true);
			addToast(copyText);
			setTimeout(() => {
				setHasCheckIcon(false);
			}, 1000);
		}, [code, copyText, addToast]);

		return (
			<Button
				onMouseDown={handleMouseDown}
				className={className}
				variant={variant}
				icon={
					hasCheckIcon ? (
						<CheckIcon className='size-4 text-neutral-50' />
					) : hasKeyframes ? (
						<TbKeyframe className='size-4 text-neutral-50' />
					) : (
						<CopyIcon className='size-4 text-neutral-50' />
					)
				}
				aria-label={hasCheckIcon ? 'Copied!' : 'Copy'}
			/>
		);
	},
);

CopyButton.displayName = 'CopyButton';
