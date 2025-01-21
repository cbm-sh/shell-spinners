'use client';

import { useCopy } from "@/hooks/use-copy";
import { cl, isKeyframes, isNpm } from "@/lib/utils";
import type { AnimatedIconButtonProps, CopyCodeButtonProps } from "@/types";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, CodeIcon, CopyIcon, HomeIcon, LayersIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { memo, useMemo } from 'react';

export const AnimatedIconButton: React.FC<AnimatedIconButtonProps> = memo(({ icons, buttonVariant, className, ...props }) => (
  console.log(`AnimatedIconButton called for ${buttonVariant}!`),
  <button
    type="button"
      className={cl(buttonVariant) ?? className}
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
));

AnimatedIconButton.displayName = 'AnimatedIconButton';

export const BackButton = memo(() => (
  console.log('BackButton called!'),
  <Link href="/">
    <AnimatedIconButton
      icons={{ default: <ArrowLeftIcon />, hover: <HomeIcon className="size-4 text-neutral-50" /> }}
      aria-label="Back to Home"
        buttonVariant="backButton"
    />
  </Link>
));

BackButton.displayName = 'BackButton';

export const CodeViewButton = memo(({ slug }: { slug: string }) => (
  console.log('CodeViewButton called!'),
  <Link href={slug}>
    <AnimatedIconButton
      icons={{ default: <ArrowRightIcon />, hover: <CodeIcon className="size-4 text-neutral-50" /> }}
      aria-label="Go to Code View"
        buttonVariant="codeViewButton"
    />
  </Link>
));

CodeViewButton.displayName = 'CodeViewButton';

export const CopyCodeButton: React.FC<CopyCodeButtonProps> = memo(({ code }) => {
  console.log('CopyCodeButton called!');
  const { onCopy, isChecked } = useCopy(code);

  const icons = useMemo(() => ({
    default: isChecked ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />,
    hover: isChecked ? <CheckIcon className='size-4' /> : <LayersIcon className='size-4' />
  }), [isChecked]);

  const buttonVariant = useMemo(() => {
    if (isKeyframes(code)) return 'copyKeyframesButton';
    if (isNpm(code)) return 'copyNpmButton';
    return 'copyCodeButton';
  }, [code]);

  console.log(`Button Variant ${buttonVariant} Loaded`);

  return (
    <AnimatedIconButton
      icons={icons}
      onClick={onCopy}
      aria-label={"Copy Code"}
      buttonVariant={buttonVariant}
    />
  );
});

CopyCodeButton.displayName = 'CopyCodeButton';