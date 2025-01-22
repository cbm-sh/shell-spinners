import Link from "next/link";
import { memo } from "react";

export const Footer = memo(() => (
    <footer className="p-6 flex h-20 items-center justify-between text-center border border-t-neutral-800 border-b-0 border-x-0">
        <Link href="/changelog" className="text-neutral-400 hover:text-neutral-500 transition-colors duration-300" aria-label="Cli Loaders Changelog" aria-hidden="false" role='link' >
            Changelog
        </Link>
        <Link href="https://github.com/cbmongithub/cli-loaders/labels/bug" className="text-neutral-400 hover:text-neutral-500 transition-colors duration-300" aria-label="Cli Loaders Bug Reports" aria-hidden="false" role='link' >
            Bugs
        </Link>
        <p className="inline-flex items-center gap-2 text-neutral-400">&copy; 2025 cli-loaders</p>
    </footer >
), () => true);

Footer.displayName = 'Footer';