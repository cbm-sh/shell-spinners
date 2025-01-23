import cbmTheme from '@/lib/config/cbm-theme.json';
import type { CodeBlockProps } from '@/types';
import { Code } from 'bright';
import React from 'react';
import { CopyCodeButton } from './ui/Buttons';

Code.theme = cbmTheme as unknown as Record<string, string>;

export const CodeBlock: React.FC<CodeBlockProps> = ({ title, code }) => {
  return (
    <div className='relative w-full h-full max-w-5xl flex flex-col items-start justify-start border border-neutral-800 bg-black'>
      <Code style={{ marginTop: '0px' }} title={title} code={code} />
      <CopyCodeButton code={code} copyText='Code copied to clipboard!' />
    </div>
  );
};

CodeBlock.displayName = 'CodeBlock';