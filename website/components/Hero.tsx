import type { HeroProps } from '@/types';

export const Hero = ({ title, description, children }: HeroProps) => (
	<section>
		<div className='px-6 py-12'>
			<h1 className='text-center text-4xl font-semibold text-balance text-neutral-50 md:text-3xl'>
				{title}
			</h1>
			<p className='pt-6 pb-12 text-center text-neutral-100'>{description}</p>
			{children}
		</div>
	</section>
);
