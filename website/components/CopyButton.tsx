'use client';

import { useToast } from '@/hooks/use-toast';
import type { ButtonProps } from '@/types';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { TbKeyframe } from 'react-icons/tb';
import { Button } from './ui/Button';

type CopyButtonProps = {
	hasKeyframes: boolean;
	code: string | string[];
	copyText: string;
	className?: string;
	variant: ButtonProps['variant'];
};

export const CopyButton: React.FC<CopyButtonProps> = ({
	hasKeyframes,
	variant,
	className,
	code,
	copyText,
}) => {
	const { addToast } = useToast();
	const [hasCheckIcon, setHasCheckIcon] = useState(false);

	const handleMouseDown = () => {
		navigator.clipboard.writeText(code.toString());
		setHasCheckIcon(true);
		addToast(copyText);
		setTimeout(() => {
			setHasCheckIcon(false);
		}, 1000);
	};

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
			aria-label='Back to Home'
		/>
	);
};
