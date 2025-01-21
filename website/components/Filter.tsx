"use client";

import { PreviewCard } from '@/components/Cards';
import { Tabs } from '@/components/Tabs';
import { getLoaders } from '@/lib/get-loaders';
import type { LoaderCategories, LoaderProps } from '@/types';
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from 'react';
import { Renderer } from './Renderer';

export const Filter = () => {
    const [activeTab, setActiveTab] = useState('Arrows');
    const filteredLoaders = useMemo(() => {
        return activeTab === 'All'
            ? getLoaders()
            : getLoaders().filter(({ category }: { category: LoaderCategories }) => category.includes(activeTab));
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