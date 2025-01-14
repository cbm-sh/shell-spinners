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
            <div className='absolute left-5 top-4 text-sm text-neutral-50'>
                {name}
            </div>
            <CopyButton
            code={`initLoader('${slug}');`} />
            <div className='z-0'>{children}</div>
        </div>
    );
};