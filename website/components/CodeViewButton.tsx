import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const CodeViewButton = ({ slug }: { slug:string }) => {
    return (
        <Link href={slug}>
            <button
                type="button"
                aria-label="Back to homepage"
                className='absolute right-3 top-3 cursor-pointer border border-neutral-900 p-2 transition hover:bg-neutral-900 bg-black'>
                <span className="absolute -top-0.5 -right-0.5 bg-blue-600 h-0.5 w-1 animate-pulse rounded-full p-1"/>
                <ArrowRightIcon className='size-4 text-neutral-50' />
            </button>
        </Link>
    );
}