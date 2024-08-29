import './App.css';
import { Calendar } from './components/Calendar/Calendar';

function App() {
	const months = [
		{ name: 'January',
          days: 31 },
		{ name: 'February',
          days: 29 },
		{ name: 'March',
          days: 31 },
		{ name: 'April',
          days: 30 },
		{ name: 'May',
          days: 31 },
		{ name: 'June',
          days: 30 },
		{ name: 'July',
          days: 31 },
		{ name: 'August',
          days: 31 },
		{ name: 'September',
          days: 30 },
		{ name: 'October',
          days: 31 },
		{ name: 'November',
          days: 30 },
		{ name: 'December',
          days: 31 },
	];

	const employees = [
		{
		  name: "Andrew Clark",
		  vacations: [
			["21.04.24", "24.04.24"],
			["06.05.24", "13.05.24"],
			["24.05.24", "08.06.24"],
			["28.06.24", "18.07.24"],
		  ],
		},
		{
		  name: "Dan Abramov",
		  vacations: [
			["12.05.24", "20.05.24"],
			["04.05.24", "06.05.24"],
			["25.05.24", "26.05.24"],
		  ],
		},
		{
		  name: "Jason Bonta",
		  vacations: [
			["13.05.24", "16.05.24"],
			["11.06.24", "12.06.24"],
			["26.05.24", "26.05.24"],
			["25.05.24", "26.05.24"],
		  ],
		},
		{
		  name: "Joe Savona",
		  vacations: [
			["04.04.24", "06.05.24"],
			["26.05.24", "01.06.24"],
			["13.05.24", "16.05.24"],
		  ],
		},
	  ];
	

	return (
		<>
			<Calendar months={months} employees={employees}/>
		</>
	);
}

export default App;
