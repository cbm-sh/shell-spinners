export const ComponentPlayground = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className='flex flex-col justify-center items-center min-h-96 overflow-hidden relative bg-black p-6 border border-neutral-800'>
      <div className='absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
      {children}
    </div>
  );
