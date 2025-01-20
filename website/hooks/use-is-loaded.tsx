import { useState, useEffect } from "react";

export const useIsLoaded = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return [isLoaded] as const;
}