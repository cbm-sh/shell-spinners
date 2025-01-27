import type { HeroProps } from '@/types';

export const Hero = ({ title, description, children }: HeroProps) => (
	<section>
		<div className='py-12 px-6'>
			<h1 className='text-center text-4xl font-semibold text-balance text-neutral-50 md:text-5xl'>
				{title}
			</h1>
			<p className='pt-3 text-center text-neutral-100'>{description}</p>
			{children}
		</div>
	</section>
);
