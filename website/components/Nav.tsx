import { getLoaders } from '@/lib/helpers/get-loaders';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { memo, useState } from 'react';
import { BiCode } from 'react-icons/bi';

const UL_VARIANTS = {
	open: {
		transition: { staggerChildren: 0.005, staggerDirection: 0.005, delayChildren: 0.005 },
	},
	closed: {
		transition: { staggerChildren: 0.005, staggerDirection: 0.005, delayChildren: 0.005 },
	},
};

const LI_VARIANTS = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			x: { duration: 1, stiffness: 30, type: 'spring', ease: 'easeIn' },
		},
	},
	closed: {
		x: 0,
		opacity: 0,
		transition: {
			x: { duration: 1, stiffness: 30, type: 'spring', ease: 'easeOut' },
		},
	},
};

export const Nav = memo(
	({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
		const [isAnimating, setIsAnimating] = useState(false);

		const handleToggle = () => {
			if (isAnimating) return;
			setIsAnimating(true);
			onToggle();
		};

		return (
			<AnimatePresence>
				{isOpen && (
					<motion.nav className='flex items-center justify-center gap-4'>
						<motion.div className='fixed top-20 right-[50%] z-50 flex max-w-5xl flex-col items-center justify-center text-neutral-50'>
							<motion.menu
								className='xs:grid-cols-8 xs:grid-rows-16 fixed top-[119px] grid h-auto min-h-screen w-full max-w-5xl grid-cols-7 bg-black text-zinc-50 duration-1000 ease-in-out sm:grid-cols-7 sm:grid-rows-12 md:grid-cols-10 md:grid-rows-10 lg:grid-cols-9 lg:grid-rows-10 xl:grid-cols-10 xl:grid-rows-11'
								variants={UL_VARIANTS}
								initial='closed'
								animate='open'
								exit='closed'
							>
								{Object.values(getLoaders).map(({ category, name }, i: number) => (
									<Link
										key={`${category}_${name}_${i}`}
										href={`/${name}`}
										role='link'
										onClick={handleToggle}
										aria-label={`cli-loaders | ${name}`}
									>
										<motion.li
											className='flex size-full cursor-pointer items-center justify-center border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
											key={`${name}_${i}`}
											onClick={handleToggle}
											variants={LI_VARIANTS}
											whileHover={{ scale: 0.95 }}
											whileTap={{ scale: 0.93 }}
										>
											<motion.button
												onClick={handleToggle}
												className='group relative inline-flex h-full w-full cursor-pointer items-center justify-center overflow-hidden font-medium text-neutral-50 transition duration-300 ease-out'
											>
												<motion.span className='ease absolute inset-0 flex size-full -translate-x-full items-center justify-center bg-neutral-900 text-neutral-50 duration-300 group-hover:translate-x-0'>
													<BiCode size={16} />
												</motion.span>
												<motion.span className='lg:text-normal ease absolute flex size-full transform items-center justify-center text-xs font-light text-neutral-50 transition duration-300 group-hover:translate-x-full sm:text-sm'>
													{name}
												</motion.span>
												<motion.span className='invisible relative'>{name}</motion.span>
											</motion.button>
										</motion.li>
									</Link>
								))}
							</motion.menu>
						</motion.div>
					</motion.nav>
				)}
			</AnimatePresence>
		);
	},
);

Nav.displayName = 'Nav';
