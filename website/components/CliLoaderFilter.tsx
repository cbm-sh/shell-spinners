"use client";

import { useState } from 'react';
import allLoaders from '@/lib/all-loaders';
import { Card } from '@/components/Card';
import { CliLoaderTabs } from '@/components/CliLoaderTabs';
import { motion, AnimatePresence } from "framer-motion";
import { CliLoader } from './CliLoader';

const ComponentFilter = () => {
    const [activeTab, setActiveTab] = useState('All');
    const filteredLoaders = activeTab === 'All'
        ? allLoaders
        : allLoaders.filter(({ category }) => category.includes(activeTab));

    return (
        <>
            <CliLoaderTabs tabs={['All', 'Arrows', 'Bars', 'Circles', 'Dots', 'Emojis', 'Lines', 'Numbers', 'Squares', 'Symbols', 'Togglers']} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='min-h-dvh w-full p-6 border border-y-neutral-800 border-x-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3'>
            <AnimatePresence>
                {filteredLoaders.map((loader) => (
                    <motion.div
                    key={loader.name}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                        <Card keyframes={loader.keyframes} key={loader.name} slug={loader.name} name={loader.name}>
                          <CliLoader speed={loader.speed} keyframes={loader.keyframes} />
                          </Card>
                    </motion.div>
                ))}
                </AnimatePresence>
            </div>
            </div>
        </>
    );
};

export default ComponentFilter;