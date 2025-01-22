"use client";

import type { ToastProps } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { memo } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const TOAST_VARIANTS = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            x: { duration: 1, stiffness: 30, type: 'spring', ease: 'easeIn' },
        },
    },
    closed: {
        x: 0,
        opacity: 0,
        transition: {
            x: { duration: 1, stiffness: 30, type: 'spring', ease: 'easeOut' },
        },
    },
}

export const Toast = memo(({ message, onClose }: ToastProps) => {
    const isOpen = true;
    return (
        <AnimatePresence initial={false}>
            <motion.div
                className={isOpen ? ` w-96 h-12 text-center flex justify-center items-center border border-neutral-800 bg-black text-neutral-50` :
                    `p-4 flex justify-center items-center border border-neutral-800 bg-black text-neutral-50`}
                variants={TOAST_VARIANTS}>
                <span className='inline-flex flex-row justify-center items-center'><FaCheckCircle />&nbsp;&nbsp;{message}</span>
                <button className="absolute top-3 right-3 text-3xs" onClick={onClose}><FaX /></button>
            </motion.div>
        </AnimatePresence>
    );
});

Toast.displayName = 'Toast';
