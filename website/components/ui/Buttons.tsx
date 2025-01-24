'use client';

import { useCopy } from '@/hooks/use-copy';
import { cx, getCodeCategory } from '@/lib/utils';
import type { AnimatedButtonProps, CopyCodeButtonProps } from '@/types';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import { BiCheck, BiCode, BiCopy } from 'react-icons/bi';
import { FaNpm } from 'react-icons/fa';
import { HiArrowLeft, HiArrowRight, HiOutlineHome } from 'react-icons/hi';
import { TbKeyframes } from 'react-icons/tb';

const styles = {
	AnimatedButton:
		'inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden text-neutral-50 transition duration-300 ease-in-out border border-neutral-800 group',
	BackButton: 'relative top-0 left-0',
	CopyKeyframesButton: 'absolute top-3 right-14',
	CopyCodeButton: 'absolute top-3 right-3',
	CopyNpmButton: 'relative top-0 -right-2',
	CodeViewButton: 'absolute top-3 right-3',
	ForwardButton: 'relative top-0 right-0',
	HomeButton: 'relative top-0 left-0',
};

export const AnimatedButton: React.FC<AnimatedButtonProps> = memo(
	({ icons, className, ...props }) => (
		<button className={cx(className, styles.AnimatedButton)} {...props}>
			<span className='ease absolute inset-0 flex size-full -translate-x-full items-center justify-center bg-neutral-900 text-neutral-50 transition duration-300 group-hover:translate-x-0'>
				{icons.hover ?? icons.default}
			</span>
			<span className='ease absolute flex size-full transform items-center justify-center text-neutral-50 transition duration-300 group-hover:translate-x-full'>
				{icons.default}
			</span>
			<span className='invisible relative'>{icons.default}</span>
		</button>
	),
);

AnimatedButton.displayName = 'AnimatedButton';

export const BackButton = memo(() => (
	<Link onClick={() => history.go(-1)} href='/'>
		<AnimatedButton
			className={styles.BackButton}
			icons={{ default: <HiArrowLeft size={16} />, hover: <HiArrowLeft size={16} /> }}
			aria-label='Back to Home'
		/>
	</Link>
));

BackButton.displayName = 'BackButton';

export const ForwardButton = memo(({ slug }: { slug: string }) => (
	<Link href={slug}>
		<AnimatedButton
			className={styles.ForwardButton}
			icons={{ default: <HiArrowRight size={16} />, hover: <HiArrowRight size={16} /> }}
			aria-label='Next Loader'
		/>
	</Link>
));

ForwardButton.displayName = 'ForwardButton';

export const CodeViewButton = memo(({ slug }: { slug: string }) => (
	<Link href={slug}>
		<AnimatedButton
			className={styles.CodeViewButton}
			icons={{ default: <HiArrowRight size={16} />, hover: <BiCode size={16} /> }}
			aria-label='Go to Code View'
		/>
	</Link>
));

CodeViewButton.displayName = 'CodeViewButton';

export const CopyCodeButton: React.FC<CopyCodeButtonProps> = memo(
	({ code, copyText }) => {
		const [onCopy, isChecked] = useCopy(code, copyText as string);

		const icons = useMemo(
			() => ({
				default: isChecked ? <BiCheck size={16} /> : <BiCopy size={16} />,
				hover: isChecked ? (
					<BiCheck size={16} />
				) : getCodeCategory(code) === 'Npm' ? (
					<FaNpm size={16} />
				) : getCodeCategory(code) === 'Keyframes' ? (
					<TbKeyframes size={16} />
				) : getCodeCategory(code) === 'Code' ? (
					<BiCopy size={16} />
				) : (
					<BiCheck size={16} />
				),
			}),
			[isChecked, code],
		);

		const className = useMemo(() => {
			switch (true) {
				case getCodeCategory(code) === 'Keyframes':
					return styles.CopyKeyframesButton;
				case getCodeCategory(code) === 'Npm':
					return styles.CopyNpmButton;
				case getCodeCategory(code) === 'Code':
					return styles.CopyCodeButton;
				default:
					return '';
			}
		}, [code]);

		return (
			<AnimatedButton
				className={className}
				icons={icons}
				onClick={onCopy}
				aria-label={'Copy Code'}
			/>
		);
	},
);

CopyCodeButton.displayName = 'CopyCodeButton';

export const HomeButton = memo(() => (
	<Link href='/'>
		<AnimatedButton
			className={styles.HomeButton}
			icons={{ default: <HiOutlineHome size={16} />, hover: <HiOutlineHome size={16} /> }}
			aria-label='Back to Home'
		/>
	</Link>
));

HomeButton.displayName = 'HomeButton';
