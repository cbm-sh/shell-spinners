import type { ChangeLogProps } from '@/types';
import fs from 'node:fs';
import path from 'node:path';
import { cache } from 'react';

const changeLog = cache((): ChangeLogProps[] => {
	const dir = path.join(process.cwd(), '..', 'CHANGELOG.md');
	const log = fs.readFileSync(dir, 'utf-8');
	const lines = log.split('\n');

	const changeLog: ChangeLogProps[] = [];
	let latest: ChangeLogProps | null = null;

	for (const line of lines) {
		switch (true) {
			case line.startsWith('## '):
				latest = { v: line.replace('## ', '').trim(), change: [] };
				changeLog.push(latest);
				break;
			case line.startsWith('### '):
				latest?.change.push({
					type: line.replace('### ', '').trim(),
					notes: [],
				});
				break;
			case line.startsWith('- '):
				latest?.change[latest.change.length - 1].notes.push(
					line.replace('- ', '').trim(),
				);
				break;
		}
	}

	return changeLog;
});

export const getChangeLog = (): ChangeLogProps[] => changeLog();
