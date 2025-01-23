"use client";

import {
    getLoadersByCategory
} from '@/lib/helpers/get-loaders';
import type { TabsProps } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { memo, Suspense, useEffect, useMemo, useState } from 'react';
import { LoaderRenderer } from './LoaderRenderer';
import { PreviewCard } from './ui/Cards';

const Tabs = memo(({ setActiveTab }: TabsProps) => {
    const tabs = ['Arrows', 'Bars', 'Circles', 'Dots', 'Emojis', 'Lines', 'Numbers', 'Squares', 'Symbols', 'Togglers'];
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        window.history.pushState(null, '', `?tab=${tab}`);
    };

    return (
        <div className="z-40 px-6 font-light flex flex-row py-1 mx-auto justify-between items-center overflow-x-scroll overflow-scroll-invisible">
            {tabs.map((tab: string, i: number) => (
                <button
                    key={`tab-${i}`}
                    type="button"
                    className="cursor-pointer text-sm px-3 py-2"
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
});

Tabs.displayName = 'Tabs';

export const Filter = memo(() => {
    const router = useRouter();
    const params = useSearchParams();
    const initialTab = params.get('tab') ?? 'Arrows';
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        if (params.get('tab') !== activeTab) {
            const query = new URLSearchParams({ ...Object.fromEntries(params.entries()), tab: activeTab }).toString();
            router.push(`${window.location.pathname}?${query}`);
        }
    }, [params, router, activeTab]);

    const filteredLoaders = useMemo(() => getLoadersByCategory(activeTab), [activeTab]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='z-40 min-h-screen w-full p-6 border border-y-neutral-800 border-x-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3'>
                    {filteredLoaders.map(({ name, keyframes, speed }) => (
                        <div key={name}>
                                <PreviewCard keyframes={keyframes} key={name} slug={name} name={name}>
                                <LoaderRenderer key={name} speed={speed} keyframes={keyframes} />
                                </PreviewCard>
                        </div>
                    ))}
                </div>
            </div>
        </Suspense>
    );
});

Filter.displayName = 'Filter';