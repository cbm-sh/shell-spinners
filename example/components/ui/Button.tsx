import { cva, type VariantProps } from 'class-variance-authority';

const buttonCva = cva(
  'inline-flex transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50 font-medium h-12 px-6 rounded-md items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-neutral-900 hover:bg-neutral-700 text-neutral-50',
        secondary: 'bg-neutral-400 text-neutral-950 hover:bg-neutral-300',
        outline: 'border border-neutral-400 text-neutral-950 hover:bg-neutral-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonCva>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <button type='button' {...props} className={buttonCva({ variant, className })}>
      {children}
    </button>
  );
};

export default Button;
