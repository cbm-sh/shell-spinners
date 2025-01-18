import { ArrowLeftIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const BackButton = () => (
 <Link href="/">
   <button className="relative inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden font-medium text-neutral-50 transition duration-300 ease-out border border-neutral-800 group">
   <span className="absolute inset-0 flex items-center justify-center size-full text-zinc-50 duration-300 -translate-x-full bg-neutral-900 group-hover:translate-x-0 ease">
       <HomeIcon className="size-4 text-zinc-50" />
   </span>
   <span className="absolute flex items-center justify-center size-full text-neutral-50 transition-all duration-300 transform group-hover:translate-x-full ease">
       <ArrowLeftIcon className="size-4" />
   </span>
   <span className="relative invisible"><ArrowLeftIcon /></span>
   </button>
 </Link>
);
