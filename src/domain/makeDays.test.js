import { expect, test, describe } from 'vitest';
import { makeDays } from './makeDays';

describe('makeDays', () => {
	test('В феврале обычного года 28 дней', () => {
		expect(makeDays(1, 2025)).toHaveLength(28);
	});
	test('В феврале високосного года 29 дней', () => {
		expect(makeDays(1, 2024)).toHaveLength(29);
	});
	test('В декабре 31 день', () => {
		expect(makeDays(11, 2025)).toHaveLength(31);
	});
	test('В сентябре 30 дней', () => {
		expect(makeDays(8, 2025)).toHaveLength(30);
	});
});
