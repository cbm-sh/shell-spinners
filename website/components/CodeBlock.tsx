import githubDark from '@/lib/config/theme.json';
import type { CodeBlockProps } from '@/types';
import { Code } from 'bright';
import { CopyButton } from './CopyButton';

Code.theme = githubDark as unknown as Record<string, string>;

export const CodeBlock: React.FC<CodeBlockProps> = ({
	code,
	keyframes,
	lang,
	title,
	isV2,
}) => (
	<div className='relative border border-neutral-800'>
		<div className='absolute top-4 left-4'>
			<p className='text-sm text-neutral-400'>
				{title}
				{isV2 && (
					<span className='ml-2 border border-blue-500 bg-blue-600 px-1 py-0.5 text-xs text-zinc-50'>
						v2.0
					</span>
				)}
			</p>
		</div>
		{keyframes && (
			<CopyButton
				hasKeyframes={Array.isArray(keyframes)}
				variant='quaternary'
				code={keyframes?.toString() || ''}
				copyText='Keyframes copied to clipboard!'
			/>
		)}
		<CopyButton
			hasKeyframes={false}
			variant='secondary'
			code={code || ''}
			copyText='Code copied to clipboard!'
		/>
		<Code style={{ paddingTop: '20px' }} code={code} lang={lang} />
	</div>
);
