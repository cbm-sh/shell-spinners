import { Code } from 'bright';
import { CopyButton } from './CopyButton';
import githubDark from '@/lib/theme.json';

type CodeBlockProps = {
  code: string;
  lang: string;
  title: string;
  isV2?: boolean;
};

Code.theme = githubDark as unknown as Record<string, string>;

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang, title, isV2 }) => (
    <div className='relative border border-neutral-800'>
        <div className='absolute left-4 top-4'>
          <p className='text-sm text-neutral-400'>{title}
            {isV2 && ( <span className='text-xs bg-blue-600 border border-blue-500 px-1 py-0.5 text-zinc-50 ml-2'>v2.0</span>)}
            </p>
        </div>
      <CopyButton code={code} />
      <Code code={code} lang={lang} />
    </div>
  );