import type { TabsProps } from "@/types";
import { memo } from "react";

export const Tabs = memo(({ tabs, setActiveTab }: TabsProps) => {
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        window.history.pushState(null, '', `?tab=${tab}`);
    };

    return (
        <div className="z-40 px-6 font-light flex flex-row py-1 mx-auto justify-between items-center overflow-x-scroll">
            {tabs.map((tab: string) => (
                <button
                    type="button"
                    className="cursor-pointer text-sm px-3 py-2"
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
});

Tabs.displayName = 'Tabs';



