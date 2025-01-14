import CopyButton from './CopyButton';

type CardProps = {
    children: React.ReactNode;
    slug: string;
    name: string;
};

export const Card: React.FC<CardProps> = ({
    children,
    slug,
    name,
}) => {
    return (
        <div className='size-full relative flex items-center justify-center border border-neutral-900 bg-black px-8 py-32'>
                        <div className='absolute size-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
            <p className='absolute left-5 top-4 text-sm text-neutral-50'>
                {name}
            </p>
            <CopyButton
            code={`initLoader('${slug}');`} />
            <div className='z-0'>{children}</div>
        </div>
    );
};