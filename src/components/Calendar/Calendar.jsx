/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import s from './Calendar.module.css';
import { useState } from 'react';

export function Calendar({ months, employees }) {
	const [monthNumber, setMonthNumber] = useState(4);

	const days = [];
	const month = months[monthNumber];
	for (let i = 1; i <= month.days; i++) {
		days.push(i);
	}

  function checkMonth(monthNumber) {
    monthNumber = monthNumber % months.length;
    if (monthNumber < 0) {
      monthNumber = months.length - 1;
    }
    setMonthNumber(monthNumber);
  }

	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<button className={s.button} onClick={() => checkMonth(monthNumber - 1)}>←</button>
				<h3>{month.name} 2024</h3>
				<button className={s.button} onClick={() => checkMonth(monthNumber + 1)}>→</button>
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
								<li key={day} className={s.square}></li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
