import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { BMACLogoIcon, XLogoIcon } from './Icons';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => (
        <header className='flex p-6 h-18 items-center justify-between border border-b-neutral-800 border-t-0 border-x-0'>
            <Link href='/' className='inline-flex items-center gap-2'>
                <Image alt="cli-loaders logo" src="/icon.svg" width={24} height={24} /><span className='text-lg'>cli-loaders</span>
            </Link>
            <nav className='flex gap-6'>
                <Link
                    href='https://github.com/cbm-sh/cli-loaders'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex'
                >
                    <GitHubLogoIcon className='size-6 text-neutral-50' />
                </Link>
                <Link
                    href='https://x.com/cbmonx'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex'
                >
                    <XLogoIcon className='size-6 text-neutral-50' />
                </Link>
                <Link
                    href='https://buymeacoffee.com/cbmonbmac'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex'
                >
                    <BMACLogoIcon />
             </Link>
            </nav>
        </header>
    );

