'use client';

import { CheckIcon, CopyIcon, LayersIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';
import { useState } from 'react';

type CopyKeyframesButtonProps = {
  className? : string;
  keyframes: string[];
};

export const CopyKeyframesButton: React.FC<CopyKeyframesButtonProps> = ({ keyframes }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(`[${keyframes.map(keyframe => `'${keyframe}'`).join(',\n')}]`);
    setHasCheckIcon(true);
    toast.success('Keyframes copied to clipboard!');
    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
     <button onClick={onCopy} className="absolute top-3 right-14 inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden font-medium transition duration-300 ease-out border border-neutral-800 group">
     <span className="absolute inset-0 flex items-center justify-center size-full text-neutral-50 duration-300 -translate-x-full bg-neutral-900 group-hover:translate-x-0 ease">
      {hasCheckIcon ? (
        <CheckIcon className='size-4' />
      ) : (
        <CopyIcon className='size-4' />
      )}
      </span>
     <span className="absolute flex items-center justify-center size-full transition-all duration-300 transform group-hover:translate-x-full ease">
     {hasCheckIcon ? (
        <CheckIcon className='size-4' />
      ) : (
        <LayersIcon className='size-4' />
      )}
      </span>
     <span className="relative invisible"><CopyIcon /></span>
     </button>
  );
};


