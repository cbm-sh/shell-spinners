'use client';

import { buttonVariants } from '@/lib/config/variants';
import { type JSX, createElement } from 'react';

type SpanProps = JSX.IntrinsicElements['span'];

type ButtonBaseProps = {
	icon: React.ReactElement<SVGElement>;
	iconAlt?: React.ReactElement<SVGElement>;
	className?: string;
	variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
};

type ButtonAsButton = ButtonBaseProps &
	Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
		as?: 'button';
	};

type ButtonAsSpan = ButtonBaseProps &
	Omit<SpanProps, keyof ButtonBaseProps> & {
		as: 'span';
	};

type ButtonProps = ButtonAsButton | (ButtonAsSpan & ButtonBaseProps);

export const Button = ({
	as,
	icon,
	iconAlt,
	className,
	variant,
	...props
}: ButtonProps): JSX.Element => {
	const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');
	const cn = buttonVariants[variant as unknown as keyof typeof buttonVariants].className;
	const tag = as ? 'span' : 'button';

	return createElement(
		tag,
		{
			className: cx(
				cn,
				className ?? '',
				'group inline-flex cursor-pointer items-center justify-center overflow-hidden border border-neutral-800 p-2 text-neutral-50 transition duration-300 ease-in-out',
			),
			...props,
		},
		createElement(
			'span',
			{
				className:
					'ease absolute inset-0 flex size-full -translate-x-full items-center justify-center bg-neutral-900 text-neutral-50 transition duration-300 group-hover:translate-x-0',
			},
			iconAlt ?? icon,
		),
		createElement(
			'span',
			{
				className:
					'ease absolute flex size-full transform items-center justify-center text-neutral-50 transition duration-300 group-hover:translate-x-full',
			},
			icon,
		),
		createElement(
			'span',
			{
				className: 'invisible relative',
			},
			icon,
		),
	);
};

Button.displayName = 'Button';
