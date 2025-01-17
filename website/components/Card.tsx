import { CodeViewButton } from './CodeViewButton';

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
        <div className='size-full relative flex items-center justify-center border border-neutral-800 bg-black px-8 py-32'>
        <div className='absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
            <div className='absolute left-4 top-4 text-sm text-neutral-50'>
                {name}
            </div>
            {/* TODO: HeartButton component?
            <HeartButton />
            */}
            <CodeViewButton slug={slug} />
            {children}
        </div>
    );
};