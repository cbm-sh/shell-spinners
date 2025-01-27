import type { TabsProps } from '@/types';
import { memo } from 'react';

export const Tabs = memo(({ setActiveTab }: TabsProps) => {
	const tabs = [
		'arrows',
		'bars',
		'circles',
		'dots',
		'emojis',
		'lines',
		'numbers',
		'squares',
		'symbols',
		'togglers',
	];

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
		window.history.pushState(null, '', `?tab=${tab}`);
	};

	return (
		<div className='overflow-x-invisible z-40 mx-auto flex h-10 flex-row items-center justify-between overflow-x-scroll px-6 py-1'>
			{tabs.map((tab: string, i: number) => (
				<button
					key={`tab-${i}`}
					type='button'
					className='cursor-pointer px-3 py-2 text-sm'
					onMouseDown={() => handleTabClick(tab)}
				>
					{tab.charAt(0).toUpperCase() + tab.slice(1)}
				</button>
			))}
		</div>
	);
});

Tabs.displayName = 'Tabs';
