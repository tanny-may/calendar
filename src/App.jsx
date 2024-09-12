import './App.css';
import { useState } from 'react';
import { Calendar } from './components/Calendar/Calendar';

function App() {
	const employees = [
		{
			name: 'Andrew Clark',
			vacations: [
				['04.05.24', '07.05.24'],
				['28.06.24', '18.07.24'],
				['28.07.24', '18.09.24'],
				['28.11.24', '18.01.25'],
			],
		},
		{
			name: 'Dan Abramov',
			vacations: [
				['04.05.24', '07.05.24'],
				['25.05.24', '26.05.24'],
			],
		},
		{
			name: 'Jason Bonta',
			vacations: [
				['04.05.24', '07.05.24'],
				['11.06.24', '12.06.24'],
			],
		},
		{
			name: 'Joe Savona',
			vacations: [
				['04.04.24', '06.05.24'],
				['26.05.24', '01.06.24'],
				['13.05.24', '16.05.24'],
			],
		},
	];
	const [monthNumber, setMonthNumber] = useState(6);
	const [year, setYear] = useState(2023);

	return (
		<>
			<Calendar
				monthNumber={monthNumber}
				setMonthNumber={setMonthNumber}
				year={year}
				setYear={setYear}
				employees={employees}
			/>
		</>
	);
}

export default App;
