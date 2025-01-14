import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className='flex p-6 h-18 items-center justify-between border border-b-neutral-900 border-t-0 border-x-0'>
            <Link href='/' className='inline-flex items-center gap-2'>
                <Image alt="cbm.sh logo" src="/cbmshlogo.svg" width={24} height={24} /><span className='text-lg'>cli-loaders</span>
            </Link>
            <nav className='flex gap-6'>
                <Link
                    href='https://github.com/cbm-sh/cli-loaders'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex'
                >
                    <GitHubLogoIcon className='size-6 text-neutral-50 transition-colors hover:text-neutral-400' />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
