'use client';

import { useToast } from '@/hooks/use-toast';
import type { ToastProps } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { memo, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const TOAST_VARIANTS = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: 0.5, stiffness: 30, type: 'spring', ease: 'easeIn' },
		},
	},
	closed: {
		y: 20,
		opacity: 0,
		transition: {
			y: { duration: 0.5, stiffness: 30, type: 'spring', ease: 'easeOut' },
		},
	},
};

export const Toast = memo(({ isOpen, message, onClose }: ToastProps) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			if (onClose) {
				onClose();
			}
		}, 3000);
		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className='fixed bottom-4 z-50 flex h-12 w-96 flex-row items-center justify-between border border-neutral-800 bg-black px-2 py-4 text-neutral-50'
					variants={TOAST_VARIANTS}
					initial='closed'
					animate='open'
					exit='closed'
				>
					<div className='mx-auto inline-flex flex-row items-center justify-around space-x-3'>
						<FaCheckCircle />
						<span className='inline-flex flex-row items-center justify-center'>
							{message}
						</span>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
});

Toast.displayName = 'Toast';

export const ToastWrapper = memo(() => {
	const { toasts, removeToast } = useToast();

	const handleClose = (id: number) => {
		removeToast(id);
	};

	return (
		<div className='fixed z-50 flex w-full max-w-5xl flex-col items-center justify-center'>
			{toasts.map(({ message, id }: ToastProps) => (
				<Toast
					isOpen={true}
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
