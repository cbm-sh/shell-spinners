'use client';

import { buttonVariants } from '@/lib/config/variants';
import type { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> =
	({ icon, iconAlt, variant, className = '', ...props }) => {
		const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');
		const cn = buttonVariants[variant].className;

		return (
			<button type='button' className={cx(cn, 'inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden text-neutral-50 transition duration-300 ease-in-out border border-neutral-800 group')} {...props}>
				<span className='ease absolute inset-0 flex size-full -translate-x-full items-center justify-center bg-neutral-900 text-neutral-50 transition duration-300 group-hover:translate-x-0'>
					{iconAlt ?? icon}
				</span>
				<span className='ease absolute flex size-full transform items-center justify-center text-neutral-50 transition duration-300 group-hover:translate-x-full'>
					{icon}
				</span>
				<span className='invisible relative'>{icon}</span>
			</button>
		)
	};

Button.displayName = 'Button';

