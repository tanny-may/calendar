/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import s from './Calendar.module.css';
import { useState } from 'react';
import { makeDays } from '../../domain/makeDays';
import { collectVacationDays } from '../../domain/collectVacationDays';

// стейт можно сделать локальным
// и лучше один стейт { month, year }
// сделать две функции: +1 месяц и -1 месяц
// уже в самой функции что-то менять
// написать тесты на что-нибудь, на само изменение
let months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export function Calendar({ employees }) {
	const [date, setDate] = useState({ month: 4, year: 2024 });
	let currMonth = date.month;
	let currYear = date.year;

	const days = makeDays(date.month, date.year);

	function nextMonth() {
		currMonth++;
		if (currMonth >= months.length) {
			currMonth = currMonth % months.length;
			currYear++;
		}
		setDate({ month: currMonth, year: currYear });
	}

	function prevMonth() {
		currMonth--;
		if (currMonth < 0) {
			currMonth = months.length - 1;
			currYear--;
		}
		setDate({ month: currMonth, year: currYear });
	}

	// function setDate(monthNumber, year) {
	// 	if (monthNumber < 0) {
	// 		monthNumber = months.length - 1;
	// 		year--;
	// 	} else if (monthNumber >= months.length) {
	// 		monthNumber = monthNumber % months.length;
	// 		year++;
	// 	}
	// 	setMonthNumber(monthNumber);
	// 	setYear(year);
	// }
	let key = String(currMonth + 1).padStart(2, '0') + '.' + String(currYear).substring(2);

	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<button className={s.button} onClick={() => prevMonth()}>
					←
				</button>
				<h3>
					{months[currMonth]} {currYear}
				</h3>
				<button className={s.button} onClick={() => nextMonth()}>
					→
				</button>
			</div>

			<ul className={s.days}>
				{days.map((day) => (
					<li key={day} className={s.day}>
						{day}
					</li>
				))}
			</ul>

			<div className={s.calendar}>
				{employees.map((employee) => (
					<div className={s.row}>
						<p className={s.name}>{employee.name}</p>
						<ul className={s.squares}>
							{days.map((day) => (
								<li
									key={day}
									className={s.square}
									style={
										(collectVacationDays(employee.vacations)[key] || new Set()).has(day)
											? { backgroundColor: 'gold' }
											: { backgroundColor: 'green' }
									}
								></li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
