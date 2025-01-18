type ToolTipProps = {
    children: React.ReactNode;
    text: string;
    align?: string;
    top?: string;
  };

export const ToolTip = ({ children, text, align = '-left-1', top = '-top-6' }: ToolTipProps) => (
    <div className='absolute top-3 right-14 group cursor-pointer'>
      {children}
      <span
        className={`pointer-events-none absolute font-normal after:absolute after:left-[50%] after:top-[80%] after:ml-[-5px] after:size-[7px] after:rotate-45 after:border-4 after:border-solid after:border-neutral-800 dark:after:border-neutral-50 ${align} ${top} w-max bg-black px-2 py-1 text-sm font-medium text-neutral-50 opacity-0 transition-opacity ease-in-out group-hover:opacity-100`}>
        {text}
      </span>
    </div>
  );
