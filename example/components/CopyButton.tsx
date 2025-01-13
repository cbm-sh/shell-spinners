'use client';

import { CopyIcon, CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

type CopyButtonProps = {
  code: string;
};

const CopyButton: React.FC<CopyButtonProps> = ({ code }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <button
      type='button'
      className='cursor-pointer rounded-md border border-neutral-900 p-2 transition hover:bg-neutral-900 bg-black'
      onClick={onCopy}
    >
      {hasCheckIcon ? (
        <CheckIcon className='h-4 w-4 text-neutral-50' />
      ) : (
        <CopyIcon className='h-4 w-4 text-neutral-50' />
      )}
    </button>
  );
};

export default CopyButton;
