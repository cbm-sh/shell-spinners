'use client';

import { SVG_PATH_CLOSE, SVG_PATH_OPEN } from '@/lib/config/variants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useEffect, useState } from 'react';
import { Nav } from './Nav';
import { IconGroup } from './ui/Icons';

export const Header = memo(() => {
	const [animation, setAnimation] = useState('closed');
	const [isLoaded, setIsLoaded] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsOpen(prev => !prev);
		setIsLoaded(true);
		setAnimation('moving');
		setTimeout(() => {
			setAnimation(isOpen ? 'closed' : 'opened');
		}, 1000);
	};

	useEffect(() => {
		const bodyClass = document.querySelector('body')?.classList;
		if (bodyClass) {
			if (isOpen) {
				bodyClass.add('overflow-hidden');
			}

			return () => {
				bodyClass.remove('overflow-hidden');
			};
		}
	}, [isOpen]);

	return (
		<>
			<Nav isOpen={isOpen} onToggle={handleMenuToggle} />
			<header className='z-50 flex h-20 items-center justify-between bg-black p-6'>
				<Link
					href='/'
					aria-label='Cli Loaders Logo'
					aria-hidden='false'
					tabIndex={0}
					className='inline-flex items-center gap-2'
				>
					<Image
						role='img'
						className='z-50'
						alt='cli-loaders logo'
						src='/icon.svg'
						width={24}
						height={24}
					/>
					<span className='text-md sm:text-lg'>cli-loaders</span>
				</Link>
				{isLoaded && <IconGroup className='hidden lg:flex lg:gap-x-6' />}
				<motion.button
					className='flex cursor-pointer flex-col items-center justify-center border border-neutral-800 p-1 px-2 target:ring target:ring-neutral-800 focus-within:ring focus-within:ring-neutral-800 hover:ring hover:ring-neutral-800 focus:ring focus:ring-neutral-800 focus-visible:ring focus-visible:ring-neutral-800 active:ring active:ring-neutral-700 lg:hidden'
					type='button'
					aria-label='Nav Toggle'
					role='button'
					onClick={handleMenuToggle}
				>
					<motion.svg
						className='outline-none'
						aria-hidden='false'
						tabIndex={5}
						width='18'
						height='18'
						viewBox='0 0 24 24'
					>
						<motion.path stroke='#ffffff' animate={animation} variants={SVG_PATH_OPEN} />
						<motion.path stroke='#ffffff' animate={animation} variants={SVG_PATH_CLOSE} />
					</motion.svg>
				</motion.button>
			</header>
		</>
	);
});

Header.displayName = 'Header';
