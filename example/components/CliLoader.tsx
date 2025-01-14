"use client";

import React, { useEffect, useState } from 'react';

type LoaderProps = {
  speed: number;
  keyframes: string[];
};

export const CliLoader: React.FC<LoaderProps> = ({ speed, keyframes }) => {
  const [currentFrame, setCurrentFrame] = useState(keyframes[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setCurrentFrame(keyframes[index]);
      index = (index + 1) % keyframes.length;
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return <>{currentFrame}</>;
};

