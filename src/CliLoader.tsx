"use client";

import React, { useEffect, useState } from 'react';

type CliLoaderProps = {
  speed: number;
  keyframes: string[];
  className?: string;
};

/**
 * Initialize a custom loader
 * @param speed - ***Required*** - The loader speed
 * @param keyframes - ***Required*** - The keyframes for your loader
 * @returns The loader object
 */

const CliLoader: React.FC<CliLoaderProps> = ({ speed, keyframes, className }) => {
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
  <div className={className}>{currentFrame}</div>
  )
};

export default CliLoader;

