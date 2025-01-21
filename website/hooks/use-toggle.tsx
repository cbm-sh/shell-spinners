"use client";

import { useState } from "react";

export const useToggle = (initialState: boolean) => {
    const [isVisible, setIsVisible] = useState(initialState);

    const toggleIsVisible = () => setIsVisible((prev) => !prev);

    return [isVisible, toggleIsVisible] as const;
};