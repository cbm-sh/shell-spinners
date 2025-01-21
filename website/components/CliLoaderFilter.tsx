"use client";

import { Card } from '@/components/Card';
import { CliLoaderTabs } from '@/components/CliLoaderTabs';
import getCliLoaders from '@/lib/get-cli-loaders';
import type { CliLoaderCategories, CliLoaderProps } from '@/types';
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from 'react';
import { CliLoaderRenderer } from './CliLoaderRenderer';

export const CliLoaderFilter = () => {
    const [activeTab, setActiveTab] = useState('Arrows');
    const filteredLoaders = useMemo(() => {
        return activeTab === 'All'
            ? getCliLoaders()
            : getCliLoaders().filter(({ category }: { category: CliLoaderCategories }) => category.includes(activeTab));
    }, [activeTab]);

    return (
        <>
            <CliLoaderTabs tabs={['Arrows', 'Bars', 'Circles', 'Dots', 'Emojis', 'Lines', 'Numbers', 'Squares', 'Symbols', 'Togglers']} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='z-40 min-h-dvh w-full p-6 border border-y-neutral-800 border-x-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3'>
                    <AnimatePresence>
                        {filteredLoaders.map(({ keyframes, name, speed }: CliLoaderProps) => (
                            <motion.div
                                key={name}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card keyframes={keyframes} key={name} slug={name} name={name}>
                                    <CliLoaderRenderer key={name} speed={speed} keyframes={keyframes} />
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};