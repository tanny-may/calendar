import { expect, test, describe } from 'vitest';
import { findVacationDaysIntersection } from './findVacationDaysIntersection';

describe('findVacationDaysIntersection', () => {
	test('Возвращает множество дней переданного месяца-года, в которые отсутвуют все люди', () => {
		const vacationsDict = {
			'Andrew Clark': { '07.24': new Set([1, 2, 3, 4, 5]) },
			'Dan Abramov': { '07.24': new Set([1, 2, 3]), '08.24': new Set([10, 11, 12, 13]) },
		};
		expect(findVacationDaysIntersection(vacationsDict, 7, 2024)).toEqual(new Set([1, 2, 3]));
	});
});