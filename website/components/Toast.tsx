"use client";

import { useToast } from '@/hooks/use-toast';
import type { ToastProps } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { memo, useEffect, useState } from 'react';

const FaCheckCircle = dynamic(() => import('react-icons/fa').then(mod => mod.FaCheckCircle));

const TOAST_VARIANTS = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { duration: 0.5, stiffness: 30, type: 'spring', ease: 'easeIn' },
        },
    },
    closed: {
        y: 100,
        opacity: 0,
        transition: {
            y: { duration: 0.5, stiffness: 30, type: 'spring', ease: 'easeOut' },
        },
    },
};

export const Toast = memo(({ isOpen, message, onClose }: ToastProps) => {
    const [isAnimating, setIsAnimating] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setIsAnimating(false);
                onClose?.();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed top-4 flex flex-row items-center justify-center text-neutral-50 w-96 z-50 h-12 bg-black border border-neutral-800 px-2 py-4"
                    variants={TOAST_VARIANTS}
                    initial="closed"
                    animate={isAnimating ? "open" : "closed"}
                    exit="closed">
                    <span className='inline-flex flex-row justify-center items-center'><FaCheckCircle />&nbsp;&nbsp;{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
});

Toast.displayName = 'Toast';

export const ToastWrapper = memo(() => {
    const { toasts, removeToast } = useToast();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen((prev => !prev));
    }, [toasts]);

    return (
        <div className='fixed flex flex-col justify-center items-center w-full max-w-5xl z-50'>
            {toasts.map(({ message, id }: ToastProps) => (
                <Toast
                    isOpen={isOpen}
                    key={`toast_${id}`}
                    id={id}
                    message={message}
                    onClose={() => removeToast(id)} />
            ))}
        </div>

    );
});

ToastWrapper.displayName = 'ToastWrapper';
