"use client";

import type { ToastContextProps, ToastProps } from '@/types';
import { createContext, useState, type ReactNode } from 'react';

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

ToastContext.displayName = 'ToastContext';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const addToast = (message: string, type: 'success' | 'error' | 'info') => {
        const id = Date.now();
        setToasts([...toasts, { id, message, type }]);
        setTimeout(() => removeToast(id), 2000);
    };

    const removeToast = (id: number) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    const success = (message: string) => addToast(message, 'success');
    const error = (message: string) => addToast(message, 'error');
    const info = (message: string) => addToast(message, 'info');

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast, success, error, info }}>
            {children}
        </ToastContext.Provider>
    );
};

ToastProvider.displayName = 'ToastProvider';