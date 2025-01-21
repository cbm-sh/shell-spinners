import { BackButton } from '@/components/Buttons';
import { getChangeLog } from '@/lib/get-changelog';
import { type ChangeLogProps } from '@/types';
import { useMemo } from 'react';

const ChangelogPage = () => {
    const changelog: ChangeLogProps[] = useMemo(() => getChangeLog(), []);

    const highestVersion = useMemo(() => changelog.reduce((prev, current) => {
        return prev.version > current.version ? prev : current;
    }), [changelog]);

    return (
        <>
            <section>
                <div className='py-12 px-6'>
                    <div className='absolute w-full max-w-5xl min-h-48 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
                    <h1 className='text-balance relative z-40 font-semibold text-neutral-100 text-4xl md:text-5xl text-center'>
                        Changelog
                    </h1>
                    <p className='relative z-40 text-neutral-200 text-center py-6'>
                        View the latest changes to the cli-loaders package and website.
                    </p>
                </div>
            </section>
            <section>
                <div className='px-6 pb-6 space-y-6 min-h-full'>
                    <div className='flex flex-row justify-between items-center'>
                        <BackButton />
                    </div>
                </div>
            </section>
            <section className='bg-black border border-x-0 border-t-neutral-800 border-b-0'>
                <div className="p-6 flex flex-col justify-center items-center gap-6">
                    <h1 className='text-md font-light text-neutral-400'>Latest Updates</h1>
                    {changelog.map((version, versionIndex) => (
                        <div key={versionIndex} className='min-h-96 w-full flex flex-col items-center justify-center border overflow-y-scroll border-neutral-800 bg-black h-auto py-6'>
                            <div className='relative flex flex-col justify-center items-center p-6 text-sm text-neutral-50'>
                                <h2 className="text-sm text-white">
                                    {version.version === highestVersion.version ? <span className='w-auto relative bg-blue-600 border border-blue-500 px-0.5 py-0 ml-[4px] mt-[4px] h-auto text-xs inline-flex'>v{version.version} - Latest</span> : <span className='w-auto relative bg-rose-600 border border-rose-500 px-0.5 py-0 ml-[4px] h-auto text-xs inline-flex'>v{version.version} - Previous</span>
                                    }
                                </h2>
                                {version.changes.map(({ type, details }, changeIndex) => (
                                    <div key={changeIndex} className="min-h-fill w-96 flex flex-col justify-center items-center overflow-y-scroll">
                                        <h3 className="p-6 text-lg font-semibold">{type}</h3>
                                        <ul className="flex flex-col justify-center items-start text-left text-neutral-300">
                                            {details.map((_detail, detailIndex) => (
                                                <li key={detailIndex}> - {_detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ChangelogPage;
