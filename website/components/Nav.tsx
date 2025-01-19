import CLI_LOADERS from "@/lib/cli-loaders";
import { CodeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const cliLoaders = CLI_LOADERS().map((loaders) => loaders);

const UL_VARIANTS = {
    open: {
        transition: { staggerChildren: 0.01, delayChildren: 0.01 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: 0.01 },
    },
}

const LI_VARIANTS = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            x: { stiffness: 45, type: 'spring', ease: 'easeIn' },
        },
    },
    closed: {
        x: 100,
        opacity: 0,
        transition: {
            x: { stiffness: 45, type: 'spring', ease: 'easeOut' },
        },
    },
}

export const Nav = ({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) => {
    return (
        <nav className='flex gap-x-4 md:gap-x-6'>
            <div className='absolute z-50 top-20 right-[50%] flex flex-col items-center justify-center text-neutral-50 max-w-5xl'>
                <motion.ul
                    className={`fixed bg-black max-w-5xl w-full ${isOpen ? 'top-[76px]' : 'top-[100%]'} z-50 min-h-screen h-auto overflow-y-scroll grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 duration-[1250ms] ease-in-out bg-black`}
                    variants={UL_VARIANTS}
                    animate={isOpen ? 'open' : 'closed'}>
                    {cliLoaders.map((loader, i) => (
                        <Link
                            key={`${loader.name}_${i}`} href={`/${loader.name}`} role='link' onClick={onToggle} aria-label={`cli-loaders | ${loader.name}`}>
                            <motion.li className='size-full border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 cursor-pointer flex items-center justify-center' key={`${loader.name}_${i}`} onClick={onToggle} variants={LI_VARIANTS} whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.93 }}>
                                <button onClick={onToggle} className="relative w-full h-full inline-flex cursor-pointer items-center justify-center overflow-hidden font-medium text-neutral-50 transition duration-300 ease-out group">
                                    <span className="absolute inset-0 flex items-center justify-center size-full text-neutral-50 duration-300 -translate-x-full bg-neutral-900 group-hover:translate-x-0 ease">
                                        <CodeIcon className="size-4 text-neutral-50" />
                                    </span>
                                    <span className="absolute flex items-center justify-center size-full text-neutral-50 transition-all duration-300 transform group-hover:translate-x-full ease">
                                        {loader.name}
                                    </span>
                                    <span className="relative invisible">{loader.name}</span>
                                </button>
                            </motion.li>
                        </Link>
                    ))}
                </motion.ul>
            </div>
        </nav>
    );
};