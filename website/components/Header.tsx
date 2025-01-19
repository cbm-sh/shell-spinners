"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLoaded } from '@/hooks/use-loaded';
import { useToggle } from '@/hooks/use-toggle';

export const SVG_PATH_OPEN = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    moving: { d: 'M0 8.5L24 8.5' },
    closed: { d: 'M0 8.5L24 8.5' },
}

export const SVG_PATH_CLOSE = {
    open: { d: 'M3.00006 21.0607L21 3.06064' },
    moving: { d: 'M0 14.5L24 14.5' },
    closed: { d: 'M0 14.5L12 14.5' },
}

const Nav = dynamic(() => import('@/components/Nav').then((mod) => mod.Nav), { ssr: false });

export const Header = () => {
    const [animation, setAnimation] = useState('closed');
    const loaded = useLoaded();
    const [isOpen, toggle] = useToggle(false);

    const handleToggle = () => {
        toggle();
        setAnimation('moving');
        setTimeout(() => {
            setAnimation(isOpen ? 'closed' : 'open');
        }, 750);
    };

    // useEffect(() => {
    //     const body = document.querySelector('body');
    //     const nav = document.querySelector('nav');

    //     if (isOpen) {
    //         body.style.overflow = 'hidden';
    //         nav.style.overflowY = 'scroll';
    //     } else {
    //         body.style.overflow = 'auto';
    //         nav.style.overflowY = 'hidden';
    //     }
    // }, [isOpen]);

    return (
        <header className='flex p-6 h-20 items-center justify-between'>
            <Link href='/' onClick={isOpen ? handleToggle : undefined} aria-label="Cli Loaders Logo" aria-hidden="false" tabIndex={0} className='inline-flex items-center gap-2'>
                <Image role='img' className="z-50" alt="cli-loaders logo" src="/icon.svg" width={24} height={24} /><span className='text-md sm:text-lg'>cli-loaders</span>
            </Link>
            {loaded && <Nav isOpen={isOpen} onToggle={handleToggle} />}
            <button
                type='button'
                aria-label='Nav Toggle'
                role='button'
                onClick={handleToggle}>
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
            </button>
        </header>
    );
};