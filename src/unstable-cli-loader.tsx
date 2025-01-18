import React, { useEffect, useState } from 'react';

type LoaderProps = {
    speed: number;
    keyframes: string[];
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Testing, Unstable. A custom React loader component
 * @param speed - ***Required*** - The loader speed
 * @param keyframes - ***Required*** - The keyframes for your loader
 * @returns The loader component
 */

const UnstableCliLoader: React.FC<LoaderProps> = ({ speed, keyframes, ...props }) => {
        const [currentFrame, setCurrentFrame] = useState(keyframes[0]);

        useEffect(() => {
            let index = 0;
            const interval = setInterval(() => {
                setCurrentFrame(keyframes[index]);
                index = (index + 1) % keyframes.length;
            }, speed);

            return () => clearInterval(interval);
        }, [keyframes, speed]);

        return (
        <div {...props}>{currentFrame}</div>
        )
    };

    export default UnstableCliLoader;
