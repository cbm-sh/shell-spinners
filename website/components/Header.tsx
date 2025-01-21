"use client";

import { useLoaded } from '@/hooks/use-loaded';
import { useToggle } from '@/hooks/use-toggle';
import { GitHubLogoIcon, HeartIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { BMACLogoIcon, XLogoIcon } from './Icons';

export const SVG_PATH_OPEN = {
    opened: { d: 'M3.06061 2.99999L21.0606 21' },
    moving: { d: 'M0 8.5L24 8.5' },
    closed: { d: 'M0 8.5L24 8.5' },
}

export const SVG_PATH_CLOSE = {
    opened: { d: 'M3.00006 21.0607L21 3.06064' },
    moving: { d: 'M0 14.5L24 14.5' },
    closed: { d: 'M0 14.5L12 14.5' },
}

const Nav = dynamic(() => import('@/components/Nav').then((mod) => mod.Nav), { ssr: false });

export const Header = memo(() => {
    console.log('Header called!');
    const [animation, setAnimation] = useState('closed');
    const [isLoaded] = useLoaded();
    const [isVisible, toggleIsVisible] = useToggle(false);

    const handleMenuToggle = useCallback(() => {
        toggleIsVisible();
        setAnimation('moving');
        setTimeout(() => {
            setAnimation(isVisible ? 'closed' : 'opened');
        }, 1000);
    }, [isVisible, toggleIsVisible]);

    useEffect(() => {
        const bodyClass = document.querySelector('body')?.classList;
        if (bodyClass) {
            if (isVisible) {
                bodyClass.add('overflow-hidden');
            }

            return () => {
                bodyClass.remove('overflow-hidden');
            };
        }

    }, [isVisible]);

    const Navigation = useMemo(() => <Nav isOpen={isVisible} onToggle={handleMenuToggle} />, [isVisible, handleMenuToggle]);

    return (
        <>
            {isLoaded && Navigation}
            <header className='flex p-6 h-20 items-center justify-between'>
                <Link href='/' aria-label="Cli Loaders Logo" aria-hidden="false" tabIndex={0} className='inline-flex items-center gap-2'>
                    <Image role='img' className="z-50" alt="cli-loaders logo" src="/icon.svg" width={24} height={24} /><span className='text-md sm:text-lg'>cli-loaders</span>
                </Link>
                {/* keep these links, on mobile, hide the social icons and show the nav toggle */}
                <div className="hidden lg:flex lg:gap-x-6">
                    <Link
                        href='https://github.com/cbm-sh/cli-loaders'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-hidden="false"
                        role='link'
                        className='inline-flex'
                        aria-label="Cli Loaders Github Repository"
                    >
                        <GitHubLogoIcon className='size-4 sm:size-5' />
                    </Link>
                    <Link
                        href='https://x.com/cbmonx'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-hidden="false"
                        role='link'
                        aria-label="Author Christian B. Martinez' Twitter(X) Account"
                    >
                        <XLogoIcon className='size-4 sm:size-5' />
                    </Link>
                    <Link
                        href='https://buymeacoffee.com/cbmonbmac'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex'
                        role='link'
                        aria-hidden="false"
                        aria-label="Author Christian B. Martinez' Buy Me A Coffee Page"
                    >
                        <BMACLogoIcon className='size-4 sm:size-5 bg-gradient-to-l' />
                    </Link>
                    <Link
                        href='https://github.com/sponsors/cbmongithub'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex'
                        role='link'
                        aria-hidden="false"
                        aria-label="Author Christian B. Martinez' Buy Me A Coffee Page"
                    >
                        <HeartIcon className='size-4 sm:size-5 text-pink-300' />
                    </Link>
                </div>
                <button
                    className='p-1 px-2 border border-neutral-800 lg:hidden flex flex-col justify-center items-center focus:ring focus:ring-neutral-800 active:ring active:ring-neutral-700 focus-visible:ring focus-visible:ring-neutral-800 focus-within:ring focus-within:ring-neutral-800 hover:ring hover:ring-neutral-800 target:ring target:ring-neutral-800'
                    type='button'
                    aria-label='Nav Toggle'
                    role='button'
                    onClick={handleMenuToggle}>
                    <svg
                        className='outline-none'
                        aria-hidden='false'
                        tabIndex={5}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <motion.path
                            stroke='#FFFFFF'
                            animate={animation}
                            variants={SVG_PATH_OPEN}
                        />
                        <motion.path
                            stroke='#FFFFFF'
                            animate={animation}
                            variants={SVG_PATH_CLOSE}
                        />
                    </svg>
                </button>
            </header>
        </>
    );
});

Header.displayName = 'Header';