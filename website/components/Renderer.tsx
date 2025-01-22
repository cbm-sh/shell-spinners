"use client";

import type { RendererProps } from '@/types';
import { memo, useEffect, useMemo, useState } from 'react';

export const Renderer: React.FC<RendererProps> = memo(({ speed, keyframes, className, ...props }) => {
  const [currentFrame, setCurrentFrame] = useState(keyframes[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentFrame(keyframes[index]);
      index = (index + 1) % keyframes.length;
    }, speed);

    return () => clearInterval(interval);
  }, [keyframes, speed]);

  const renderedFrame = useMemo(() => currentFrame, [currentFrame]);

  return (
    <div className={className ?? `relative text-4xl font-mono flex flex-col justify-center items-center overflow-hidden`} {...props}>
      {renderedFrame}
    </div>
  );
});

Renderer.displayName = 'Renderer';
