/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import s from './Calendar.module.css';
import { useState } from 'react';
import { makeDays } from '../../domain/makeDays';
import { collectVacationDays } from '../../domain/collectVacationDays';
import { findVacationDaysIntersection } from '../../domain/findVacationDaysIntersection';

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

	const days = makeDays(date.month, date.year);

	function nextMonth() {
		let currMonth = date.month;
		let currYear = date.year;
		currMonth++;
		if (currMonth >= months.length) {
			currMonth = currMonth % months.length;
			currYear++;
		}
		setDate({ month: currMonth, year: currYear });
	}

	function prevMonth() {
		setDate((date) => {
			let currMonth = date.month;
			let currYear = date.year;
			currMonth--;
			if (currMonth < 0) {
				currMonth = months.length - 1;
				currYear--;
			}
			return { month: currMonth, year: currYear };
		});
	}

	let key = String(date.month + 1).padStart(2, '0') + '.' + String(date.year).slice(2);

	const vacationsDict = Object.fromEntries(
		employees.map((employee) => {
			return [employee.name, collectVacationDays(employee.vacations) ?? new Set()];
		})
	);

	function getColor(vacations, key, day) {
		if (findVacationDaysIntersection(vacationsDict, date.month + 1, date.year).has(day)) {
			return 'red'
		}
		else if ((collectVacationDays(vacations)[key] || new Set()).has(day)) {
			return 'gold'
		}
		return 'green'
	}
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<button className={s.button} onClick={() => prevMonth()}>
					←
				</button>
				<h3>
					{months[date.month]} {date.year}
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
									style={{ backgroundColor: getColor(employee.vacations, key, day) }}
								></li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
