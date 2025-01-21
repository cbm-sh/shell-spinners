import { motion } from "framer-motion";
import { memo } from "react";

const CliLoaderTabs = memo(({ tabs, activeTab, setActiveTab }: CliLoaderTabsProps) => (
    <div className="z-40 px-6 font-light flex flex-row py-4 mx-auto justify-between items-center overflow-x-scroll">
            {tabs.map((tab: string) => (
                <motion.button
                    type="button"
                    className="cursor-pointer text-sm px-3 py-2"
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    initial={false}
                    animate={{
                        scale: activeTab === tab ? 1.1 : 1,
                        color: activeTab === tab ? 'white' : '#999',
                    }}
                >
                    {tab}
                </motion.button>
            ))}
        </div>
));

CliLoaderTabs.displayName = 'CliLoaderTabs';

export default CliLoaderTabs;


