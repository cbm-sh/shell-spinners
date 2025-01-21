"use client";

import { getLoaders } from '@/lib/get-loaders';
import type { LoaderProps } from '@/types';
import { AnimatePresence, motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

const PreviewCard = dynamic(() => import('@/components/Cards').then(mod => mod.PreviewCard));
const Tabs = dynamic(() => import('@/components/Tabs').then(mod => mod.Tabs));
const Renderer = dynamic(() => import('./Renderer').then(mod => mod.Renderer));

export const Filter = () => {
    const [activeTab, setActiveTab] = useState('Arrows');
    const filteredLoaders = useMemo(() => {
        return activeTab === 'All'
            ? getLoaders()
            : getLoaders().filter((loader) => loader.category?.includes(activeTab));
    }, [activeTab]);

    return (
        <>
            <Tabs tabs={['Arrows', 'Bars', 'Circles', 'Dots', 'Emojis', 'Lines', 'Numbers', 'Squares', 'Symbols', 'Togglers']} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='z-40 min-h-dvh w-full p-6 border border-y-neutral-800 border-x-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3'>
                    <AnimatePresence>
                        {filteredLoaders.map(({ keyframes, name, speed }: LoaderProps) => (
                            <motion.div
                                key={name}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PreviewCard keyframes={keyframes} key={name} slug={name} name={name}>
                                    <Renderer key={name} speed={speed} keyframes={keyframes} />
                                </PreviewCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};