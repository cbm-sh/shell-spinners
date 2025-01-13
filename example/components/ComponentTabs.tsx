import { motion } from "framer-motion";

type ComponentTabsProps = {
    tabs: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const ComponentTabs = ({ tabs, activeTab, setActiveTab }: ComponentTabsProps) => {
    return (
        <div className="font-light flex flex-row w-96 py-4 mx-auto justify-between items-start overflow-x-scroll">
            {tabs.map((tab: string) => (
                <motion.button
                    type="button"
                    className="cursor-pointer text-sm px-3 py-2"
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    initial={false}
                    animate={{
                        scale: activeTab === tab ? 1.1 : 1,
                        color: activeTab === tab ? 'white' : 'var(--color-neutral-400)',
                    }}
                    whileTap={{ scale: 1.08 }}
                    whileHover={{ scale: 1.08, color: 'white' }}
                >
                    {tab}
                </motion.button>
            ))}
        </div>
    );
};

export default ComponentTabs;