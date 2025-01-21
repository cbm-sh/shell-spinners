import { getLoaders } from "@/lib/get-loaders";
import type { LoaderProps } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { memo, useState } from 'react';

const CodeIcon = dynamic(() => import('@radix-ui/react-icons').then(mod => mod.CodeIcon));

const UL_VARIANTS = {
    open: {
        transition: { staggerChildren: 0.0055, staggerDirection: 0.0055, delayChildren: 0.0065 },
    },
    closed: {
        transition: { staggerChildren: 0.0055, staggerDirection: 0.0055, delayChildren: 0.0065 },
    }
}

const LI_VARIANTS = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            x: { duration: 1, stiffness: 30, type: 'spring', ease: 'easeIn' },
        },
    },
    closed: {
        x: 100,
        opacity: 0,
        transition: {
            x: { duration: 1, stiffness: 30, type: 'spring', ease: 'easeOut' },
        },
    },
}

export const Nav = memo(({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) => {
    console.log('Nav called!');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        onToggle();
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    return (
        <AnimatePresence initial={false}>
            <motion.nav className='flex items-center justify-center gap-4'>
                <motion.div className='fixed z-50 top-20 right-[50%] flex flex-col items-center justify-center text-neutral-50 max-w-5xl'>
                    <motion.menu
                        className={isOpen ? `fixed top-[119px] text-black max-w-5xl w-full z-50 min-h-screen h-auto overflow-y-scroll grid grid-cols-6 xs:grid-cols-5 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-9 xl:grid-cols-10 xs:grid-rows-16 sm:grid-rows-12 md:grid-rows-10 lg:grid-rows-10 xl:grid-rows-11 duration-1000 ease-in-out bg-black` :
                            `fixed top-[-100%] text-black max-w-5xl w-full z-50 min-h-screen h-auto overflow-y-scroll grid grid-cols-6 xs:grid-cols-5 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-9 xl:grid-cols-10 xs:grid-rows-16 sm:grid-rows-12 md:grid-rows-10 lg:grid-rows-10 xl:grid-rows-11 duration-1000 ease-in-out bg-black`}
                    variants={UL_VARIANTS}
                    initial='closed'
                        animate={isOpen ? 'open' : 'closed'}
                        onAnimationComplete={() => setIsAnimating(false)}>
                        {getLoaders().map((loader: LoaderProps, i: number) => (
                        <Link
                            key={`${loader.name}_${i}`} href={`/${loader.name}`} role='link' onClick={handleToggle} aria-label={`cli-loaders | ${loader.name}`}>
                            <motion.li className='size-full border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 cursor-pointer flex items-center justify-center' key={`${loader.name}_${i}`} onClick={handleToggle} variants={LI_VARIANTS} whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.93 }}>
                                <button onClick={handleToggle} className="relative w-full h-full inline-flex cursor-pointer items-center justify-center overflow-hidden font-medium text-neutral-50 transition duration-300 ease-out group">
                                    <span className="absolute inset-0 flex items-center justify-center size-full text-neutral-50 duration-300 -translate-x-full bg-neutral-900 group-hover:translate-x-0 ease">
                                        <CodeIcon className="size-4 text-neutral-50" />
                                    </span>
                                    <span className="font-light absolute flex text-xs sm:text-sm lg:text-normal items-center justify-center size-full text-neutral-50 transition duration-300 transform group-hover:translate-x-full ease">
                                        {loader.name}
                                    </span>
                                    <span className="relative invisible">{loader.name}</span>
                                </button>
                            </motion.li>
                        </Link>
                    ))}
                    </motion.menu>
                </motion.div>
            </motion.nav>
        </AnimatePresence>
    );
});

Nav.displayName = 'Nav';