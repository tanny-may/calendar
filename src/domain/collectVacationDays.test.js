import { expect, test, describe } from 'vitest';
import { collectVacationDays } from './collectVacationDays';

describe('collectVacationDays', () => {
	test('Отпуск в рамках одного месяца', () => {
		const vacations = [['28.06.24', '30.06.24']];
		expect(collectVacationDays(vacations)).toEqual({
			'06.24': new Set([28, 29, 30]),
		});
	});
	test('Отпуск на два месяца', () => {
		const vacations = [['01.09.24', '31.10.24']];
		expect(collectVacationDays(vacations)).toEqual({
			'09.24': new Set([
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
				29, 30
			]),
			'10.24': new Set([
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
				29, 30, 31
			]),
		});
	});
	test('Отпуск на границе двух месяцев', () => {
		const vacations = [['30.07.24', '05.08.24']];
		expect(collectVacationDays(vacations)).toEqual({
			'07.24': new Set([30, 31]),
			'08.24': new Set([1, 2, 3, 4, 5]),
		});
	});
	test('Отпуск на границе двух лет', () => {
		const vacations = [['30.12.24', '03.01.25']];
		expect(collectVacationDays(vacations)).toEqual({
			'12.24': new Set([30, 31]),
			'01.25': new Set([1, 2, 3]),
		});
	});
	test('Большой тест', () => {
		const vacations = [
			['28.06.24', '02.07.24'],
			['28.07.24', '18.09.24'],
			['28.11.24', '08.01.25'],
		];
		expect(collectVacationDays(vacations)).toEqual({
			'06.24': new Set([28, 29, 30]),
			'07.24': new Set([1, 2, 28, 29, 30, 31]),
			'08.24': new Set([
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
				29, 30, 31,
			]),
			'09.24': new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]),
			11.24: new Set([28, 29, 30]),
			12.24: new Set([
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
				29, 30, 31,
			]),
			'01.25': new Set([1, 2, 3, 4, 5, 6, 7, 8]),
		});
	});
});
