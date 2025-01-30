import { BackButton } from '@/components/BackButton';
import { Hero } from '@/components/Hero';
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
				<Hero
					title='Changelog'
					description='View the latest change to the cli-loaders package and website'
				/>
				<div className='z-50 p-6 flex flex-row items-center justify-between'>
					<BackButton />
				</div>
			</section>
			<section className='border border-x-0 border-b-0 border-t-neutral-800'>
				<div className='flex flex-col items-center justify-center gap-6 p-6'>
					<h1 className='text-md text-neutral-400'>Latest Updates</h1>
					{changeLog.map((v, i) => (
						<div
							key={`${v}_${i}`}
							className='flex h-auto min-h-96 w-full flex-col items-center justify-start overflow-y-scroll border border-neutral-800 py-6'
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
