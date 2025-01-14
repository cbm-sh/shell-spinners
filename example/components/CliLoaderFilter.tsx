"use client";

import { useState } from 'react';
import { LOADERS } from '@/lib/loaders';
import { Card } from '@/components/Card';
import { CliLoaderTabs } from '@/components/CliLoaderTabs';
import { motion, AnimatePresence } from "framer-motion";
import { CliLoader } from './CliLoader';

const ComponentFilter = () => {
    const [activeTab, setActiveTab] = useState('Dots');
    const filteredLoaders = activeTab === 'All'
        ? LOADERS
        : LOADERS.filter(({ category }) => category.includes(activeTab));

    return (
        <>
            <CliLoaderTabs tabs={['Dots', 'Lines', 'All']} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='min-h-dvh w-full p-6 border border-y-neutral-900 border-x-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
                <AnimatePresence>
                        {filteredLoaders.map((loader) => (
                            <motion.div
                                key={loader.name}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                    <Card key={loader.name} slug={loader.name} name={loader.name}>
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