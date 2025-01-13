import { cva, type VariantProps } from 'class-variance-authority';

const componentPlaygroundCva = cva(
  'min-h-[200px] overflow-hidden relative bg-black p-6 border border-neutral-900',
  {
    variants: {
      isCentered: {
        true: 'flex items-center justify-center',
      },
    },
  },
);

export type ComponentPlaygroundProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof componentPlaygroundCva>;

const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({
  children,
  isCentered,
  className,
}) => {
  return (
    <div className={componentPlaygroundCva({ isCentered, className })}>
      <div className='absolute size-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
      <div className='z-0'>{children}</div>
    </div>
  );
};

export default ComponentPlayground;
