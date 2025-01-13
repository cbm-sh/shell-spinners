import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className='flex p-6 h-18 items-center justify-between border border-b-neutral-900 border-t-0 border-x-0'>
            <Link href='/'>
                cli-loaders
            </Link>
            <nav className='flex gap-6'>
                <Link
                    href='https://github.com/cbmongithub/react-snippets'
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
