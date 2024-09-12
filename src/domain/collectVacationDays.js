import { makeDays } from './makeDays';

export function collectVacationDays(vacations) {
	const res = {};

	for (const [start, end] of vacations) {
		const [dayStart, monthStart, yearStart] = start.split('.').map(Number);
		const [dayEnd, monthEnd, yearEnd] = end.split('.').map(Number);

		let currentDay = dayStart;
		let currentMonth = monthStart;
		let currentYear = yearStart;

		while (
			currentYear < yearEnd ||
			(currentYear === yearEnd && currentMonth < monthEnd) ||
			(currentYear === yearEnd && currentMonth === monthEnd && currentDay <= dayEnd)
		) {
			let key = String(currentMonth).padStart(2, '0') + '.' + currentYear;
			res[key] ??= new Set();
			res[key].add(currentDay);
			currentDay++;

			if (currentDay > makeDays(currentMonth - 1, currentYear).length) {
				currentDay = 1;
				currentMonth++;
			}
			if (currentMonth > 12) {
				currentMonth = 1;
				currentYear++;
			}
		}
	}
	return res;
}
