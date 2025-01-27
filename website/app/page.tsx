import { CopyButton } from '@/components/CopyButton';
import { Hero } from '@/components/Hero';
import dynamic from 'next/dynamic';

const Filter = dynamic(() => import('@/components/Filter').then((mod) => mod.Filter));

const HomePage = () => {
	return (
		<>
			<Hero
				title='Cli Loaders'
				description='A collection of animated CLI loaders for your projects'
			>
				<div className='flex flex-col items-center justify-center'>
					<div className='flex items-center border border-neutral-800'>
						<code className='relative inline-flex h-6 px-2'>npm install cli-loaders</code>
						<CopyButton
							hasKeyframes={false}
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
