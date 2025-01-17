"use client";

import React, { useEffect, useState } from 'react';

type LoaderProps = {
  speed: number;
  keyframes: string[];
  className?: string;
};

export const CliLoader: React.FC<LoaderProps> = ({ speed, keyframes, className }) => {
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
  <div className={className ?? `relative text-4xl font-mono flex flex-col justify-center items-center overflow-hidden`}>{currentFrame}</div>
  )
};

