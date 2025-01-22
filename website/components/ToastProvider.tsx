"use client";

import type { ToastContextProps, ToastProps } from '@/types';
import { createContext, memo, useCallback, useState, type ReactNode } from 'react';

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

ToastContext.displayName = 'ToastContext';

let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

export const ToastProvider = memo(({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const addToast = useCallback((message: string) => {
        if (debounceTimeout) return;
        debounceTimeout = setTimeout(() => {
            debounceTimeout = null;
        }, 1000);

        const id = Date.now();
        setToasts([...toasts, { id, message }]);
        setTimeout(() => removeToast(id), 5000);
    }, [toasts]);

    const removeToast = (id: number) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    );
});

ToastProvider.displayName = 'ToastProvider';