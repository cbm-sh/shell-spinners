import { ArrowRightIcon, CodeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const CodeViewButton = ({ slug }: { slug:string }) => (
        <Link href={slug}>
            <button className="absolute right-3 top-3 inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden font-medium text-neutral-50 transition duration-300 ease-out border border-neutral-800 group">
            <span className="absolute inset-0 flex items-center justify-center size-full text-zinc-50 duration-300 -translate-x-full bg-neutral-900 group-hover:translate-x-0 ease">
                <CodeIcon className="size-4 text-zinc-50" />
            </span>
            <span className="absolute flex items-center justify-center size-full text-neutral-50 transition-all duration-300 transform group-hover:translate-x-full ease">
                <ArrowRightIcon className="size-4" />
            </span>
            <span className="relative invisible"><ArrowRightIcon/></span>
        </button>
        </Link>
    );