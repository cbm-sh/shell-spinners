export const ComponentPlayground = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[250px] overflow-hidden relative bg-black p-6 border border-neutral-900'>
      {children}
    </div>
  );
};