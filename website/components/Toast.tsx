'use client';

import { useToast } from '@/hooks/use-toast';
import type { ToastProps } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const TOAST_VARIANTS = {
    open: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            y: { delay: 0, stiffness: 30, type: 'spring', ease: 'easeIn' },
            opacity: { ease: 'easeIn' },
            scale: { duration: 0.3, ease: 'easeIn' },
            rotate: { duration: 0.3, ease: 'easeIn' },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        scale: 0.9,
        transition: {
            y: { delay: 0, stiffness: 30, type: 'spring', ease: 'easeOut' },
            opacity: { ease: 'easeOut' },
            scale: { duration: 0.3, ease: 'easeOut' },
            rotate: { duration: 0.3, ease: 'easeOut' },
        },
    },
};

export const Toast = memo(({ isOpen, message, onClose }: ToastProps) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			if (onClose) {
				onClose();
			}
        }, 5000);
		return () => clearTimeout(timer);
	}, [onClose]);

	return (
        <AnimatePresence>
				<motion.div
                key={`toast_${message}`}
                className={`${isOpen ? 'fixed bottom-4' : 'fixed bottom-[-100%]'} flex h-12 w-96 flex-row items-center justify-between border border-neutral-800 bg-black px-2 py-4 text-neutral-50`}
					variants={TOAST_VARIANTS}
					initial='closed'
                animate={isOpen ? 'open' : 'closed'}
					exit='closed'
                onAnimationComplete={(message) => console.log('Completed animating', message)}
				>
                <motion.div className='mx-auto inline-flex flex-row justify-around items-center space-x-3'>
                    <FaCheckCircle />
                    <span className='inline-flex flex-row justify-center items-center'>{message}</span>
                </motion.div>
            </motion.div>
		</AnimatePresence>
	);
});

Toast.displayName = 'Toast';

export const ToastWrapper = memo(() => {
	const { toasts, removeToast } = useToast();
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        setIsOpen(toasts.length > 0);
    }, [toasts]);

	const handleClose = (id: number) => {
		removeToast(id);
	};

	return (
		<div className='fixed z-50 flex w-full max-w-5xl flex-col items-center justify-center'>
			{toasts.map(({ message, id }: ToastProps) => (
				<Toast
                    isOpen={isOpen}
					key={`toast_${id}`}
					id={id}
					message={message}
					onClose={() => handleClose(id)}
				/>
			))}
		</div>
	);
});

ToastWrapper.displayName = 'ToastWrapper';
