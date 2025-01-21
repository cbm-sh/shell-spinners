'use client';

import { ArrowLeftIcon, ArrowRightIcon, CodeIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { CheckIcon, CopyIcon, LayersIcon } from '@radix-ui/react-icons';
import { memo } from 'react';
import { useCopyCode } from "@/hooks/use-copy-code";
import { cx, generateCnPositionForButton, isKeyframes, isNpm } from "@/lib/utils";
import { FaNpm } from "react-icons/fa";

export const AnimatedIconButton: React.FC<AnimatedIconButtonProps> = ({ icons, buttonVariant, className, ...props }) => (
  <button
    type="button"
    className={cx(
      generateCnPositionForButton(buttonVariant),
      'inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden font-medium text-neutral-50 transition duration-300 ease-out border border-neutral-800 group',
    )}
    {...props}>
    <span
      className="absolute inset-0 flex items-center justify-center size-full text-neutral-50 transition duration-300 -translate-x-full bg-neutral-900 group-hover:translate-x-0 ease">
      {icons.hover ?? icons.default}
    </span>
    <span className="absolute flex items-center justify-center size-full text-neutral-50 transition duration-300 transform group-hover:translate-x-full ease">
      {icons.default}
    </span>
    <span className="relative invisible">{icons.default}</span>
  </button>
);

AnimatedIconButton.displayName = 'AnimatedIconButton';

export const BackButton = () => (
  <Link href="/">
    <AnimatedIconButton
      icons={{ default: <ArrowLeftIcon />, hover: <HomeIcon className="size-4 text-neutral-50" /> }}
      aria-label="Back to Home"
      buttonVariant="back"
    />
  </Link>
);

BackButton.displayName = 'BackButton';

export const NpmButton = () => (
  <Link href="/">
    <AnimatedIconButton
      icons={{ default: <CopyIcon />, hover: <FaNpm className="size-4 text-neutral-50" /> }}
      aria-label="Copy NPM Command"
      buttonVariant="npm"
    />
  </Link>
);

export const CodeViewButton = ({ slug }: { slug: string }) => (
  <Link href={slug}>
    <AnimatedIconButton
      icons={{ default: <ArrowRightIcon />, hover: <CodeIcon className="size-4 text-neutral-50" /> }}
      aria-label="Go to Code View"
      buttonVariant="code-view"
    />
  </Link>
);

CodeViewButton.displayName = 'CodeViewButton';

export const CopyCodeButton: React.FC<CopyCodeButton> = memo(({ code }) => {
  const { onCopy, isChecked } = useCopyCode(code);

  return (
    <AnimatedIconButton
      icons={{
        default: isChecked ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />, hover: isChecked ? <CheckIcon className='size-4' /> : <LayersIcon className='size-4' />
      }}
      onClick={onCopy}
      buttonVariant={isKeyframes(code) ? 'keyframes' : isNpm(code) ? 'npm' : 'code'}
    />
  );
});

CopyCodeButton.displayName = 'CopyCodeButton';


