import { getLoaders } from "@/lib/helpers/get-loaders";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { memo, useState } from 'react';
import { BiCode } from "react-icons/bi";

const UL_VARIANTS = {
    open: {
        transition: { staggerChildren: 0.0050, staggerDirection: 0.0050, delayChildren: 0.0050 },
    },
    closed: {
        transition: { staggerChildren: 0.0050, staggerDirection: 0.0050, delayChildren: 0.0050 },
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
        x: 0,
        opacity: 0,
        transition: {
            x: { duration: 1, stiffness: 30, type: 'spring', ease: 'easeOut' },
        },
    },
}

export const Nav = memo(({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        onToggle();
    };

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.nav className='flex items-center justify-center gap-4'>
                    <motion.div className='fixed z-50 top-20 right-[50%] flex flex-col items-center justify-center text-neutral-50 max-w-5xl'>
                        <motion.menu
                            className="fixed top-[119px] text-zinc-50 max-w-5xl w-full min-h-screen h-auto grid grid-cols-7 xs:grid-cols-8 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-9 xl:grid-cols-10 xs:grid-rows-16 sm:grid-rows-12 md:grid-rows-10 lg:grid-rows-10 xl:grid-rows-11 duration-1000 ease-in-out bg-black"
                            variants={UL_VARIANTS}
                            initial='closed'
                            animate='open'
                            exit='closed'
                            onAnimationComplete={() => setIsAnimating(false)}>
                            {getLoaders.map(({ category, id }, i: number) => (
                                <Link
                                    key={`${category}_${id}_${i}`} href={`/${id}`} role='link' onClick={handleToggle} aria-label={`cli-loaders | ${id}`}>
                                    <motion.li className='size-full border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 cursor-pointer flex items-center justify-center' key={`${id}_${i}`} onClick={handleToggle} variants={LI_VARIANTS} whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.93 }}>
                                        <button onClick={handleToggle} className="relative w-full h-full inline-flex cursor-pointer items-center justify-center overflow-hidden font-medium text-neutral-50 transition duration-300 ease-out group">
                                            <span className="absolute inset-0 flex items-center justify-center size-full text-neutral-50 duration-300 -translate-x-full bg-neutral-900 group-hover:translate-x-0 ease">
                                                <BiCode size={16} />
                                            </span>
                                            <span className="font-light absolute flex text-xs sm:text-sm lg:text-normal items-center justify-center size-full text-neutral-50 transition duration-300 transform group-hover:translate-x-full ease">
                                                {id}
                                            </span>
                                            <span className="relative invisible">{id}</span>
                                        </button>
                                    </motion.li>
                                </Link>
                            ))}
                        </motion.menu>
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
});

Nav.displayName = 'Nav';