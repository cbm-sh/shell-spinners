import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const BackButton = () => {
    return (
        <Link href='/'>
            <button
                type="button"
                aria-label="Back to homepage"
                className='cursor-pointer border border-neutral-900 bg-transparent p-2 transition hover:bg-neutral-900'
            >
                <ArrowLeftIcon className='size-4 text-neutral-50' />
            </button>
        </Link>
    );
}