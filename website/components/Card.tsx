import { CodeViewButton } from './CodeViewButton';

type CardProps = {
    children: React.ReactNode;
    slug: string;
    name: string;
};

export const Card: React.FC<CardProps> = ({
    slug,
    name,
}) => {
    return (
        <div className='size-full relative flex items-center justify-center border border-neutral-900 bg-black px-8 py-32'>
            <div className='absolute left-4 top-4 text-sm text-neutral-50'>

                {name}
            </div>
            <CodeViewButton slug={slug} />
        </div>
    );
};