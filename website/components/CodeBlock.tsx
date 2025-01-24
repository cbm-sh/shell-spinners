import codeTheme from '@/lib/config/theme.json';
import type { CodeBlockProps } from '@/types';
import { Code } from 'bright';
import React, { memo } from 'react';
import { CopyCodeButton } from './ui/Buttons';

Code.theme = codeTheme as unknown as Record<string, string>;

export const CodeBlock: React.FC<CodeBlockProps> = memo(({ title, code }) => {
	return (
		<div className='relative flex h-full w-full max-w-5xl flex-col items-start justify-start overflow-x-auto border border-neutral-800 bg-black p-4'>
			<Code style={{ margin: '0' }} title={title} code={code} />
			<CopyCodeButton code={code} copyText='Code copied to clipboard!' />
		</div>
	);
});

CodeBlock.displayName = 'CodeBlock';
