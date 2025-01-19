import Link from "next/link";
import CliLoader from "./CliLoaderRenderer";

export const TopBar = () => {
    const keyframes = [
        '▎',
        '▎',
        '',
        '',
        '▎',
        '▎',
        '',
        '',
        'V▎',
        'V2▎',
        'V2 N▎',
        'V2 No▎',
        'V2 Now▎',
        'V2 Now ▎',
        'V2 Now A▎',
        'V2 Now Av▎',
        'V2 Now Ava▎',
        'V2 Now Avai▎',
        'V2 Now Avail▎',
        'V2 Now Availa▎',
        'V2 Now Availab▎',
        'V2 Now Availabl▎',
        'V2 Now Available▎',
        'V2 Now Available!▎',
        'V2 Now Available! ☺️',
        'V2 Now Available! ☺️',
        'V2 Now Available! ☺️',
        'V2 Now Available! ☺️',
        'V2 Now Available! 😊',
        'V2 Now Available! 😊',
        'V2 Now Available! 😊',
        'V2 Now Available! 😊',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available!▎',
        'V2 Now Available▎',
        'V2 Now Availabl▎',
        'V2 Now Availab▎',
        'V2 Now Availa▎',
        'V2 Now Avail▎',
        'V2 Now Avai▎',
        'V2 Now Ava▎',
        'V2 Now Av▎',
        'V2 Now A▎',
        'V2 Now ▎',
        'V2 Now▎',
        'V2 No▎',
        'V2 N▎',
        'V2▎',
        'V▎',
        '',
    ];
    return (
        <div aria-label="V2 Now Available" className="flex flex-row justify-center items-center bg-black border border-y-neutral-800 border-x-0 text-neutral-200 text-sm text-center py-2 px-6">
            <Link href="/changelog">
                <span>
                    <CliLoader className="inline-flex text-sm" speed={100} keyframes={keyframes} />
                </span>
            </Link>
        </div>
    );

};