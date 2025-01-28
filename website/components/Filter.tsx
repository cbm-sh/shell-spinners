'use client';

import LOADERS from '@/lib/config/loaders';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Renderer } from './Renderer';
import { Tabs } from './Tabs';
import { Card } from './ui/Card';

export const Filter = () => {
	const router = useRouter();
	const params = useSearchParams();
	const initialTab = params.get('tab') ?? 'arrows';
	const [activeTab, setActiveTab] = useState(initialTab);
	const filteredLoaders = Object.values(LOADERS).filter(
		(loader) => loader.category === activeTab,
	);

	useEffect(() => {
		if (params.get('tab') !== activeTab) {
			const query = new URLSearchParams({
				...Object.fromEntries(params.entries()),
				tab: activeTab,
			}).toString();
			router.push(`${window.location.pathname}?${query}`);
		}
	}, [params, router, activeTab]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className='z-40 min-h-screen w-full border border-x-0 border-y-neutral-800 p-6'>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
					{filteredLoaders.map(({ category, keyframes, speed }, i: number) => (
						<Card
							key={`filter_${category}_${i + 1}`}
							slug={`/${category}_${i + 1}`}
							name={`${category}_${i + 1}`}
						>
							<Renderer speed={speed} keyframes={keyframes} />
						</Card>
					))}
				</div>
			</div>
		</Suspense>
	);
};

Filter.displayName = 'Filter';
