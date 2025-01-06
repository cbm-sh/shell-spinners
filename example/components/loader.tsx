"use client";

import React, { useEffect, useState } from 'react';
import { allLoaders } from 'cli-loaders';

type LoaderProps = {
  name: string | number;
  speed?: number;
};

const Loader: React.FC<LoaderProps> = ({ name, speed = 80 }) => {
  const [currentFrame, setCurrentFrame] = useState<string>('');
  const loader = allLoaders.find((obj) => obj.name === name || obj.id === name);

  useEffect(() => {
    if (!loader) {
      console.error('Loader not found. Please check the name or id and try again.');
      return;
    }

    const { keyframes } = loader;
    let index = 0;

    const interval = setInterval(() => {
      setCurrentFrame(keyframes[index]);
      index = (index + 1) % keyframes.length;
    }, speed);

    return () => clearInterval(interval);
  }, [loader, speed]);

  if (!loader) {
    return <div>Loader not found</div>;
  }

  return <div className='p-6'>{currentFrame}</div>;
};

export default Loader;
