"use client";

import { memoizer } from '@/lib/utils';
import type { ToastContextProps, ToastProps } from '@/types';
import { createContext, memo, useCallback, useState, type ReactNode } from 'react';

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

ToastContext.displayName = 'ToastContext';

const debounce = memoizer((fn: (...args: any[]) => void, wait: number) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return (...args: any[]) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
            timeout = null;
        }, wait);
    };
});

export const ToastProvider = memo(({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const addToast = useCallback((message: string) => {
        const id = Date.now();
        setToasts(prevToasts => [...prevToasts, { id, message }]);
        setTimeout(() => removeToast(id), 10000);
    }, []);

    const removeToast = (id: number) => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast: debounce(addToast, 1000), removeToast }}>
            {children}
        </ToastContext.Provider>
    );
});

ToastProvider.displayName = 'ToastProvider';