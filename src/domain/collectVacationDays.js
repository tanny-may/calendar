import { makeDays } from './makeDays';

export function collectVacationDays(vacations) {
	let res = {};

	for (let el of vacations) {
		let [start, end] = el;
		let startArr = start.split('.').map(Number);
		let [dayStart, monthStart, yearStart] = startArr;
		let endArr = end.split('.').map(Number);
		let [dayEnd, monthEnd, yearEnd] = endArr;

		while (
			yearStart < yearEnd ||
			(yearStart === yearEnd && monthStart < monthEnd) ||
			(yearStart === yearEnd && monthStart === monthEnd && dayStart <= dayEnd)
		) {
			let key = String(monthStart).padStart(2, '0') + '.' + yearStart;
			res[key] ??= new Set();
			res[key].add(dayStart);
			dayStart++;

			if (dayStart > makeDays(monthStart - 1, yearStart).length) {
				dayStart = 1;
				monthStart++;
			}
			if (monthStart > 12) {
				monthStart = 1;
				yearStart++;
			}
		}
	}
	return res;
}