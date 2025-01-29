import { Hero } from '@/components/Hero';
import dynamic from 'next/dynamic';

const TopBar = dynamic(() => import('@/components/TopBar').then((mod) => mod.TopBar));
const CopyCode = dynamic(() =>
	import('@/components/CopyCode').then((mod) => mod.CopyCode),
);
const Filter = dynamic(() => import('@/components/Filter').then((mod) => mod.Filter));

const HomePage = () => {
	return (
		<>
			<TopBar />
			<Hero
				title='Cli Loaders'
				description='A collection of animated CLI loaders for your projects'
			>
				<div className='flex flex-col items-center justify-center'>
					<div className='mt-8 flex items-center border border-neutral-800'>
						<code className='relative inline-flex h-6 px-2 pt-0.5'>
							npm install cli-loaders
						</code>
						<CopyCode
							variant='tertiary'
							copyText='Command copied to clipboard!'
							code='npm install cli-loaders'
						/>
					</div>
				</div>
			</Hero>
			<section className='border border-x-0 border-b-0 border-t-neutral-800'>
				<Filter />
			</section>
		</>
	);
};

export default HomePage;
