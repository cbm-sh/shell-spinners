"use client";

import { useToast } from '@/hooks/use-toast';
import type { ToastProps } from '@/types';
import { Toast } from './Toast';

export const ToastContainer = () => {
    const { toasts, removeToast } = useToast();

    return (
        <div className="fixed top-4 right-4 flex flex-col gap-2">
            {toasts.map((toast: ToastProps) => (
                <Toast
                    key={toast.id}
                    id={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)} />
            ))}
        </div>
    );
};

ToastContainer.displayName = 'ToastContainer';
