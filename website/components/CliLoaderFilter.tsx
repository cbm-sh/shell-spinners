"use client";

import { memo, useState } from 'react';
import { Card } from '@/components/Card';
import { CliLoaderTabs } from '@/components/CliLoaderTabs';
import { motion, AnimatePresence } from "framer-motion";
import CLI_LOADERS from '@/lib/cli-loaders';
import CliLoaderRenderer from './CliLoaderRenderer';

const ComponentFilter = () => {
    const [activeTab, setActiveTab] = useState('All');
    const filteredLoaders = activeTab === 'All'
        ? CLI_LOADERS()
        : CLI_LOADERS().filter(({ category }) => category.includes(activeTab));

    return (
        <>
            <CliLoaderTabs tabs={['All', 'Arrows', 'Bars', 'Circles', 'Dots', 'Emojis', 'Lines', 'Numbers', 'Squares', 'Symbols', 'Togglers']} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='min-h-dvh w-full p-6 border border-y-neutral-800 border-x-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3'>
                    <AnimatePresence>
                        {filteredLoaders.map(({ keyframes, name, speed }) => (
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

export default memo(ComponentFilter);