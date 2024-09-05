export function makeDays(monthNumber, year) {
	const shortMonths = [3, 5, 8, 10];
	let days = 31;

	if (shortMonths.includes(monthNumber)) {
		days = 30;
	}

	if (monthNumber === 1) {
		days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
	}

	const daysArray = [];
	for (let i = 1; i <= days; i++) {
		daysArray.push(i);
	}
	return daysArray;
}
