import type { CodeBlockProps } from '@/types';
import { memo } from 'react';
import { CopyCodeButton } from './Buttons';

export const CodeBlock: React.FC<CodeBlockProps> = memo(({ code, title, isV2 }) => (
  console.log('CodeBlock called!'),
  <div className='relative flex border border-neutral-800 p-2'>
    <div className='absolute left-0 top-0 p-4'>
      <p className='text-sm text-neutral-400'>{title}
        {isV2 && (<span className='absolute bg-blue-600 border border-blue-500 inline-flex w-auto px-0.5 py-0 ml-[4px] h-auto text-xs text-white'>v2.0+</span>)}
            </p>
        </div>
    <CopyCodeButton code={code} />
    <pre className="pt-12 pr-6 pl-2 pb-6 overflow-x-auto font-mono">
      <code className="text-sm text-neutral-300">
        {code}
      </code>
    </pre>
    </div>
));

CodeBlock.displayName = 'CodeBlock';