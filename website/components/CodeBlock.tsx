import { Code } from 'bright';
import CopyButton from './CopyButton';
import githubDark from '@/lib/theme.json';

type CodeBlockProps = {
  code: string;
  lang: string;
  title: string;
  isV2?: boolean;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang, title, isV2 }) => (
  <div className='relative flex flex-col justify-center items-start border border-neutral-800 p-2'>
    <div className='relative left-0 top-0'>
          <p className='text-sm text-neutral-400'>{title}
        {isV2 && (<span className='absolute bg-blue-600 border border-blue-500 inline-flex w-auto px-0.5 py-0 ml-[4px] h-auto text-xs text-white'>v2.0+</span>)}
            </p>
        </div>
      <CopyButton code={code} />
    <Code theme={githubDark as unknown as Record<string, string>} code={code} lang={lang} />
    </div>
  );