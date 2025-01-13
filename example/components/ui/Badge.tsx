import { cva, type VariantProps } from 'class-variance-authority';

const badgeCva = cva(
  'transition-colors overflow-hidden items-center rounded-full flex py-1.5 px-3.5 text-xs font-medium',
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

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeCva>;

const Badge: React.FC<BadgeProps> = ({ className, variant, children }) => {
  return <div className={badgeCva({ className, variant })}>{children}</div>;
};

export default Badge;
