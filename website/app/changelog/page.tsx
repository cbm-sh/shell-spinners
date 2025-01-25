import { BackButton } from '@/components/BackButton';
import { getChangeLog } from '@/lib/helpers/get-changelog';
import { type ChangeLogProps } from '@/types';
import { useMemo } from 'react';

const Page = () => {
	const changeLog: ChangeLogProps[] = getChangeLog();

	const latest = useMemo(
		() =>
			changeLog.reduce((prev, current) => {
				return prev.v > current.v ? prev : current;
			}),
		[changeLog],
	);

	return (
		<>
			<section>
				<div className='px-6 py-12'>
					<div className='absolute min-h-48 w-full max-w-5xl bg-[notear-gradient(to_right,#1a1a1a_1px,transparent_1px),notear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
					<h1 className='relative z-40 text-center text-4xl font-semibold text-balance text-neutral-100 md:text-5xl'>
						Changelog
					</h1>
					<p className='relative z-40 py-6 text-center text-neutral-200'>
						View the latest change to the cli-loaders package and website.
					</p>
				</div>
			</section>
			<section>
				<div className='min-h-full space-y-6 px-6 pb-6'>
					<div className='flex flex-row items-center justify-between'>
						<BackButton />
					</div>
				</div>
			</section>
			<section className='border border-x-0 border-b-0 border-t-neutral-800 bg-black'>
				<div className='flex flex-col items-start justify-center gap-6 p-6'>
					<h1 className='text-md font-light text-neutral-400'>Latest Updates</h1>
					{changeLog.map((v, i) => (
						<div
							key={`${v}_${i}`}
							className='flex h-auto min-h-96 w-full flex-col items-center justify-start overflow-y-scroll border border-neutral-800 bg-black py-6'
						>
							<div className='relative flex flex-col items-center justify-center p-6 text-sm text-neutral-50'>
								<h2 className='text-sm text-white'>
									{v.v === latest.v ? (
										<span className='innote-flex relative mt-[4px] ml-[4px] h-auto w-auto border border-blue-500 bg-blue-600 px-0.5 py-0 text-xs'>
											v{v.v} - Latest
										</span>
									) : (
										<span className='innote-flex relative ml-[4px] h-auto w-auto border border-rose-500 bg-rose-600 px-0.5 py-0 text-xs'>
											v{v.v} - Previous
										</span>
									)}
								</h2>
								{v.change.map(({ type, notes }, i) => (
									<div
										key={`${type}_${i}`}
										className='flex min-h-96 w-full flex-col items-center justify-center overflow-y-scroll'
									>
										<h3 className='p-6 text-lg font-semibold'>{type}</h3>
										<ul className='flex flex-col items-start justify-center text-left text-neutral-300'>
											{notes.map((note, i) => (
												<li key={`${note.slice(3, 10)}_${i}`}> - {note}</li>
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

export default Page;
