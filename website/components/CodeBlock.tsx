import codeTheme from '@/lib/config/theme.json';
import type { CodeBlockProps } from '@/types';
import { Code } from 'bright';
import React from 'react';
import { CopyCodeButton } from './ui/Buttons';

Code.theme = codeTheme as unknown as Record<string, string>;

export const CodeBlock: React.FC<CodeBlockProps> = ({ title, code }) => {
  return (
    <div className='relative w-full h-full overflow-x-auto max-w-5xl flex flex-col items-start justify-start border border-neutral-800 bg-black p-4'>
      <Code style={{ margin: '0' }} title={title} code={code} />
      <CopyCodeButton code={code} copyText='Code copied to clipboard!' />
    </div>
  );
};

CodeBlock.displayName = 'CodeBlock';