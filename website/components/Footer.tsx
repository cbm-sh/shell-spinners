import { GitHubLogoIcon, HeartIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { XLogoIcon, BMACLogoIcon } from "./Icons";

export const Footer = () => (
    <footer className="p-6 flex h-20 items-center justify-between text-center border border-t-neutral-800 border-b-0 border-x-0">
        <Link href="/changelog" className="text-neutral-400 hover:text-neutral-500 transition-colors" aria-label="Cli Loaders Changelog" aria-hidden="false" role='link' >
            Changelog
        </Link>
        <Link href="https://github.com/cbmongithub/cli-loaders/labels/bug" className="text-neutral-400 hover:text-neutral-500 transition-colors" aria-label="Cli Loaders Bug Reports" aria-hidden="false" role='link' >
            Bugs
        </Link>
        <div className="hidden sm:flex justify-center items-center gap-x-6">
            <Link
                href='https://github.com/cbm-sh/cli-loaders'
                target='_blank'
                rel='noopener noreferrer'
                aria-hidden="false"
                role='link'
                className='inline-flex'
                aria-label="Cli Loaders Github Repository"
            >
                <GitHubLogoIcon className='size-4 sm:size-5' />
            </Link>
            <Link
                href='https://x.com/cbmonx'
                target='_blank'
                rel='noopener noreferrer'
                aria-hidden="false"
                role='link'
                className='inline-flex'
                aria-label="Author Christian B. Martinez' Twitter(X) Account"
            >
                <XLogoIcon className='size-4 sm:size-5' />
            </Link>
            <Link
                href='https://buymeacoffee.com/cbmonbmac'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex'
                role='link'
                aria-hidden="false"
                aria-label="Author Christian B. Martinez' Buy Me A Coffee Page"
            >
                <BMACLogoIcon className='size-4 sm:size-5' />
            </Link>
            <Link
                href='https://github.com/sponsors/cbmongithub'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex'
                role='link'
                aria-hidden="false"
                aria-label="Author Christian B. Martinez' Buy Me A Coffee Page"
            >
                <HeartIcon className='size-4 sm:size-5 text-pink-300' />
            </Link>
        </div>
        <p className="inline-flex items-center gap-2 text-neutral-400">&copy; 2025 cli-loaders</p>
    </footer >
);