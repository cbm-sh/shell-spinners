'use client';

import { useCopy } from "@/hooks/use-copy";
import { cx, isCode, isKeyframes, isNpm } from "@/lib/utils";
import type { AnimatedButtonProps, CopyCodeButtonProps } from "@/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import { memo, useMemo } from 'react';
import { FaNpm } from "react-icons/fa";

const CopyIcon = dynamic(() => import('@radix-ui/react-icons').then(mod => mod.CopyIcon));
const ArrowLeftIcon = dynamic(() => import('@radix-ui/react-icons').then(mod => mod.ArrowLeftIcon));
const ArrowRightIcon = dynamic(() => import('@radix-ui/react-icons').then(mod => mod.ArrowRightIcon));
const CheckIcon = dynamic(() => import('@radix-ui/react-icons').then(mod => mod.CheckIcon));
const CodeIcon = dynamic(() => import('@radix-ui/react-icons').then(mod => mod.CodeIcon));
const HomeIcon = dynamic(() => import('@radix-ui/react-icons').then(mod => mod.HomeIcon));
const LayersIcon = dynamic(() => import('@radix-ui/react-icons').then(mod => mod.LayersIcon));

const cls = {
  AnimatedButton: 'inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden text-neutral-50 transition duration-300 ease-in-out border border-neutral-800 group',
  BackButton: 'relative top-0 left-0',
  CopyKeyframesButton: 'absolute top-3 right-14',
  CopyCodeButton: 'absolute top-3 right-3',
  CopyNpmButton: 'relative top-1 -right-2',
  CodeViewButton: 'absolute top-3 right-3',
};

export const AnimatedButton: React.FC<AnimatedButtonProps> = memo(({ icons, className, ...props }) => {
  return (
    <button
      className={cx(className, cls.AnimatedButton)}
      {...props}
    >
      <span
        className="absolute inset-0 flex items-center justify-center size-full text-neutral-50 transition duration-300 -translate-x-full bg-neutral-900 group-hover:translate-x-0 ease"
      >
        {icons.hover ?? icons.default}
      </span>
      <span className="absolute flex items-center justify-center size-full text-neutral-50 transition duration-300 transform group-hover:translate-x-full ease">
        {icons.default}
      </span>
      <span className="relative invisible">{icons.default}</span>
    </button>
  );
});

AnimatedButton.displayName = 'AnimatedButton';

export const BackButton = memo(() => (
  console.log('BackButton called!'),
  <Link href="/">
      <AnimatedButton
        className={cls.BackButton}
      icons={{ default: <ArrowLeftIcon />, hover: <HomeIcon className="size-4 text-neutral-50" /> }}
        aria-label="Back to Home"
    />
  </Link>
), () => true);

BackButton.displayName = 'BackButton';

export const CodeViewButton = memo(({ slug }: { slug: string }) => (
  console.log('CodeViewButton called!'),
  <Link href={slug}>
      <AnimatedButton
        className={cls.CodeViewButton}
      icons={{ default: <ArrowRightIcon />, hover: <CodeIcon className="size-4 text-neutral-50" /> }}
        aria-label="Go to Code View"
    />
  </Link>
), (a, b) => a.slug === b.slug);

CodeViewButton.displayName = 'CodeViewButton';

export const CopyCodeButton: React.FC<CopyCodeButtonProps> = memo(({ code }) => {
  console.log('CopyCodeButton called!');
  const { onCopy, isChecked } = useCopy(code);

  const icons = useMemo(() => ({
    default: isChecked ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />,
    hover: isChecked ? <CheckIcon className='size-4' /> : isNpm(code.toString()) ? <FaNpm className='size-4' /> : isKeyframes(code) ? <LayersIcon className='size-4' /> : isCode(code) ? <CopyIcon className='size-4' /> : <CheckIcon className='size-4' />,
  }), [isChecked, code]);

  const className = useMemo(() => {
    if (isKeyframes(code)) return cls.CopyKeyframesButton;
    else if (isNpm(code)) return cls.CopyNpmButton;
    else if (isCode(code)) return cls.CopyCodeButton;
    else return '';
  }, [code]);

  return (
    <AnimatedButton
      className={className}
      icons={icons}
      onClick={onCopy}
      aria-label={"Copy Code"}
    />
  );
});

CopyCodeButton.displayName = 'CopyCodeButton';