'use client';

import { getLoaders } from '@/lib/helpers/get-loaders';
import type { TabsProps } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { memo, Suspense, useEffect, useState } from 'react';
import { LoaderRenderer } from './LoaderRenderer';
import { PreviewCard } from './ui/PreviewCard';

const Tabs = memo(({ setActiveTab }: TabsProps) => {
	const tabs = [
		'Arrows',
		'Bars',
		'Circles',
		'Dots',
		'Emojis',
		'Lines',
		'Numbers',
		'Squares',
		'Symbols',
		'Togglers',
	];
	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
		window.history.pushState(null, '', `?tab=${tab}`);
	};

	return (
		<div className='overflow-scroll-invisible z-40 mx-auto flex flex-row items-center justify-between overflow-x-scroll px-6 py-1 font-light'>
			{tabs.map((tab: string, i: number) => (
				<button
					key={`tab-${i}`}
					type='button'
					className='cursor-pointer px-3 py-2 text-sm'
					onClick={() => handleTabClick(tab)}
				>
					{tab}
				</button>
			))}
		</div>
	);
});

Tabs.displayName = 'Tabs';

export const Filter = () => {
	const router = useRouter();
	const params = useSearchParams();
	const initialTab = params.get('tab') ?? 'Arrows';
	const [activeTab, setActiveTab] = useState(initialTab);

	useEffect(() => {
		if (params.get('tab') !== activeTab) {
			const query = new URLSearchParams({
				...Object.fromEntries(params.entries()),
				tab: activeTab,
			}).toString();
			router.push(`${window.location.pathname}?${query}`);
		}
	}, [params, router, activeTab]);

	const filteredLoaders = getLoaders.filter(
		(category) => category.category === activeTab,
	);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className='z-40 min-h-screen w-full border border-x-0 border-y-neutral-800 p-6'>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
					{filteredLoaders.map(({ category, id, keyframes, speed }, i: number) => (
						<PreviewCard
							keyframes={keyframes}
							key={`filter_${category}_${i}`}
							slug={id}
							id={id}
						>
							<LoaderRenderer key={id} speed={speed} keyframes={keyframes} />
						</PreviewCard>
					))}
				</div>
			</div>
		</Suspense>
	);
};

Filter.displayName = 'Filter';
