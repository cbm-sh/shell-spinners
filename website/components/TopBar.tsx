import Link from 'next/link';
import { memo } from 'react';

// prettier-ignore
export const TopBar = memo(({ text }: { text: string }) => {
	return (
		<section>
			<Link
				href='/changelog'
				aria-label='V3 Now Available'
				className='flex flex-row items-center justify-center border border-x-0 border-y-neutral-800 px-6 py-2 text-center text-sm'
			>
				<span>{text}</span>
			</Link>
		</section>
	);
});

TopBar.displayName = 'TopBar';
