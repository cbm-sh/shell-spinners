"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIsLoaded } from '@/hooks/use-is-loaded';
import { useMenuToggle } from '@/hooks/use-menu-toggle';
import { GitHubLogoIcon, HeartIcon } from '@radix-ui/react-icons';
import { XLogoIcon, BMACLogoIcon } from './Icons';

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

export const Header = () => {
    const [animation, setAnimation] = useState('closed');
    const [isLoaded] = useIsLoaded();
    const [isVisible, toggleIsVisible] = useMenuToggle(false);

    const handleMenuToggle = () => {
        toggleIsVisible();
        setAnimation('moving');
        setTimeout(() => {
            setAnimation(isVisible ? 'closed' : 'opened');
        }, 1000);
    };

    useEffect(() => {
        const bodyClass = document.querySelector('body')?.classList;

        if (!bodyClass) return;

        isVisible ? bodyClass.add('overflow-hidden') : bodyClass.add('overflow-auto');

    }, [isVisible]);

    return (
        <header data-header-lock={isVisible} className='flex p-6 h-20 items-center justify-between'>
            <Link href='/' onClick={isVisible ? handleMenuToggle : undefined} aria-label="Cli Loaders Logo" aria-hidden="false" tabIndex={0} className='inline-flex items-center gap-2'>
                <Image role='img' className="z-50" alt="cli-loaders logo" src="/icon.svg" width={24} height={24} /><span className='text-md sm:text-lg'>cli-loaders</span>
            </Link>
            <div className="hidden sm:flex justify-center items-center gap-x-6">
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
                    className='inline-flex'
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
                    <BMACLogoIcon className='size-4 sm:size-5' />
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
            {/* TODO: Finish the menu {isLoaded && <Nav isOpen={isVisible} onToggle={handleMenuToggle} />} */}
            {/* <button
                type='button'
                aria-label='Nav Toggle'
                role='button'
                onClick={handleMenuToggle}>
                <svg
                    aria-hidden='false'
                    className='size-5 sm:size-6'
                    tabIndex={5}
                    width='29'
                    height='29'
                    viewBox='0 0 29 29'>
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
            </button> */}
        </header>
    );
};