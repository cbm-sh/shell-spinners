"use client";

import { useState } from "react";

export const useToggle = (initialState: boolean) => {
    const [state, setState] = useState(initialState);

    const toggle = () => setState((prev) => !prev);

    return [state, toggle] as const;
};