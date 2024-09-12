export function findVacationDaysIntersection(vacationsDict, curMonth, curYear) {
	const key = String(curMonth).padStart(2, '0') + '.' + curYear.toString().slice(-2);
	const sets = Object.values(vacationsDict).map((personData) => personData[key] ?? new Set());

	const days = Array(31)
		.fill()
		.map((_, i) => i)
		.filter((day) => sets.every((set) => set.has(day)));

	return new Set(days);

	// const vacationsByDay = {};

	// for (let vacations of Object.values(vacationsDict)) {
	// 	for (let key of Object.keys(vacations)) {
	// 		let [month, year] = key.split('.').map(Number);
	// 		year += 2000;
	// 		if (month === curMonth && year === curYear) {
	// 			for (let day of vacations[key]) {
	// 				vacationsByDay[day] ??= 0;
	// 				vacationsByDay[day]++;
	// 			}
	// 		}
	// 	}
	// }

	// const res = [];
	// const personCount = Object.keys(vacationsDict).length;
	// for (let day of Object.keys(vacationsByDay)) {
	// 	if (vacationsByDay[day] === personCount) {
	// 		res.push(day);
	// 	}
	// }
	// return new Set(res.map(Number));
}
