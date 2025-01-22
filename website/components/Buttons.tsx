'use client';

import { useCopy } from "@/hooks/use-copy";
import { cx, isCode, isKeyframes, isNpm } from "@/lib/utils";
import type { AnimatedButtonProps, CopyCodeButtonProps } from "@/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import { memo, useMemo } from 'react';

const BiCheck = dynamic(() => import('react-icons/bi').then(mod => mod.BiCheck));
const BiCode = dynamic(() => import('react-icons/bi').then(mod => mod.BiCode));
const BiCopy = dynamic(() => import('react-icons/bi').then(mod => mod.BiCopy));
const FaNpm = dynamic(() => import('react-icons/fa6').then(mod => mod.FaNpm));
const HiArrowLeft = dynamic(() => import('react-icons/hi').then(mod => mod.HiArrowRight));
const HiArrowRight = dynamic(() => import('react-icons/hi').then(mod => mod.HiArrowLeft));
const HiOutlineHome = dynamic(() => import('react-icons/hi').then(mod => mod.HiOutlineHome));
const TbKeyframes = dynamic(() => import('react-icons/tb').then(mod => mod.TbKeyframes));

const styles = {
  AnimatedButton: 'inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden text-neutral-50 transition duration-300 ease-in-out border border-neutral-800 group',
  BackButton: 'relative top-0 left-0',
  CopyKeyframesButton: 'absolute top-3 right-14',
  CopyCodeButton: 'absolute top-3 right-3',
  CopyNpmButton: 'relative top-1 -right-2',
  CodeViewButton: 'absolute top-3 right-3',
};

export const AnimatedButton: React.FC<AnimatedButtonProps> = memo(({ icons, className, ...props }) => (
    <button
    className={cx(className, styles.AnimatedButton)}
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
), (a, b) => a.icons === b.icons);

AnimatedButton.displayName = 'AnimatedButton';

export const BackButton = memo(() => (
  <Link onClick={() => history.go(-1)} href="/" prefetch={true}>
      <AnimatedButton
      className={styles.BackButton}
      icons={{ default: <HiArrowRight />, hover: <HiOutlineHome /> }}
        aria-label="Back to Home"
    />
  </Link>
), () => true);

BackButton.displayName = 'BackButton';

export const CodeViewButton = memo(({ slug }: { slug: string }) => (
  <Link href={slug} prefetch={true}>
      <AnimatedButton
      className={styles.CodeViewButton}
      icons={{ default: <HiArrowLeft />, hover: <BiCode size={16} /> }}
        aria-label="Go to Code View"
    />
  </Link>
), (a, b) => a.slug === b.slug);

CodeViewButton.displayName = 'CodeViewButton';

export const CopyCodeButton: React.FC<CopyCodeButtonProps> = memo(({ code }) => {
  const { onCopy, isChecked } = useCopy(code);

  const icons = useMemo(() => ({
    default: isChecked ? <BiCheck size={16} /> : <BiCopy />,
    hover: isChecked ? <BiCheck size={16} /> : isNpm(code.toString()) ? <FaNpm size={16} /> : isKeyframes(code) ? <TbKeyframes size={16} /> : isCode(code) ? <BiCopy /> : <BiCheck size={16} />,
  }), [isChecked, code]);

  const className = useMemo(() => {
    switch (true) {
      case isKeyframes(code as string[]):
        return styles.CopyKeyframesButton;
      case isNpm(code as string):
        return styles.CopyNpmButton;
      case isCode(code as string):
        return styles.CopyCodeButton;
      default:
        return '';
    }
  }, [code]);

  return (
    <AnimatedButton
      className={className}
      icons={icons}
      onClick={onCopy}
      aria-label={"Copy Code"}
    />
  );
}, (a, b) => a.code === b.code);

CopyCodeButton.displayName = 'CopyCodeButton';