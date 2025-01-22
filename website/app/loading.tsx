"use client";

import { useLoaded } from "@/hooks/use-loaded";
import { type ReactNode } from "react";

const loading = ({
    children,
}: {
    children?: ReactNode;
}) => {
    const [loaded] = useLoaded();

    return (
        <div
            className={`absolute mx-auto transition duration-1000 bg-black/20 flex flex-col px-6 h-screen w-screen ${!loaded && "animate-pulse blur-lg"}`}
            aria-busy={!loaded}
            aria-live="polite"
            aria-label="Main Content"
        >
            {children}
        </div>
    );
}

export default loading;