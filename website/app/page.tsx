import { CopyCodeButton } from '@/components/ui/Buttons';
import dynamic from 'next/dynamic';
const Filter = dynamic(() => import('@/components/Filter').then((mod) => mod.Filter));

const HomePage = () => {
	return (
		<>
			<section>
				<div className='px-6 py-12'>
					<div className='absolute h-48 w-full max-w-5xl bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
					<h1 className='relative text-center text-4xl font-semibold text-balance text-neutral-100 md:text-5xl'>
						Cli Loaders
					</h1>
					<p className='relative pt-6 pb-12 text-center text-neutral-200'>
						A collection of animated CLI loaders for your projects.
					</p>
					<div className='relative text-center'>
						<pre>
							<code className='w-full border border-neutral-800 bg-black pt-[16px] pr-3.5 pb-[14px] pl-2.5'>
								npm install cli-loaders
								<CopyCodeButton
									code='npm install cli-loaders'
									copyText='Npm command copied to clipboard!'
								/>
							</code>
						</pre>
					</div>
				</div>
			</section>
			<section className='border border-x-0 border-b-0 border-t-neutral-800 bg-black'>
				<Filter />
			</section>
		</>
	);
};

export default HomePage;
