'use client';

import { CopyIcon, CheckIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';
import { useState } from 'react';

type CopyButtonProps = {
  className? : string;
  code: string;
};

export const CopyButton: React.FC<CopyButtonProps> = ({ code, className }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);
    toast.success(`'${code}' copied to clipboard 👨‍💻`);
    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <button
      type='button'
      className={className ?? 'absolute right-3 top-3 cursor-pointer border border-neutral-800 p-2 transition hover:bg-neutral-900 bg-black'}
      onClick={onCopy}
    >
      {hasCheckIcon ? (
        <CheckIcon className='size-4 text-neutral-50' />
      ) : (
        <CopyIcon className='size-4 text-neutral-50' />
      )}
    </button>
  );
};


