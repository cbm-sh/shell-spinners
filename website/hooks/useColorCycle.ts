'use client';

import { useState } from 'react';

export const useColorCycle = () => {
    const [isCycling, setIsCycling] = useState(false);

    const setCycle = () => {
        setIsCycling(prev => !prev);
    }

    return { isCycling, setCycle };
};
