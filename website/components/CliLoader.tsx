"use client";

import React, { useEffect, useState } from 'react';

type LoaderProps = {
  speed: number;
  keyframes: string[];
};

export const CliLoader: React.FC<LoaderProps> = ({ speed, keyframes }) => {
  const [currentFrame, setCurrentFrame] = useState(keyframes[0]);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    'white', 'yellow', 'cyan', 'lime', 'magenta', 'red', 'aqua', 'fuchsia', 'lightyellow', 'lightcyan', 'lightgreen',
    'lightpink', 'gold', 'orange', 'greenyellow', 'springgreen', 'deepskyblue', 'dodgerblue', 'chartreuse', 'lawngreen'

  ];
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentFrame(keyframes[index]);
      index = (index + 1) % keyframes.length;
    }, speed);

    return () => clearInterval(interval);
  }, [keyframes, speed]);


  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div style={{ color: colors[colorIndex] }} className='relative text-4xl font-mono flex flex-col justify-center items-center overflow-hidden'>{currentFrame}</div>
  )
};

