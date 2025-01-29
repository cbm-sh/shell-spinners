import githubDark from '@/lib/config/theme.json';
import type { CodeBlockProps } from '@/types';
import { Code } from 'bright';
import { memo } from 'react';
import { CopyCode } from './CopyCode';

Code.theme = githubDark as unknown as Record<string, string>;

export const CodeBlock = memo(({ code, lang, title, isV2, children }: CodeBlockProps) => (
	<div className='relative border border-neutral-800'>
		<div className='absolute top-4 left-4'>
			<p className='text-sm text-neutral-400'>
				{title}
				{isV2 && (
					<span className='ml-2 border border-blue-500 bg-blue-600 px-1 py-0.5 text-xs text-zinc-50'>
						v2.0+
					</span>
				)}
			</p>
		</div>
		<CopyCode
			variant='secondary'
			code={code || ''}
			copyText='Code copied to clipboard!'
		/>
		<Code style={{ paddingTop: '20px' }} code={code} lang={lang}>
			{children}
		</Code>
	</div>
),
);

CodeBlock.displayName = 'CodeBlock';
