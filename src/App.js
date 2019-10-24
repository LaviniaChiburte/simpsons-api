import React from 'react';
import GenerateRandomUser from './GenerateRandomUser';
import GenerateEmployee from './GenerateEmployee';
import DisplayEmployee from './DisplayEmployee';
import './App.css';

const sampleEmployee = {
	gender: 'male',
	name: {
		title: 'mr',
		first: 'mathys',
		last: 'aubert'
	},
	location: {
		street: '9467 rue gasparin',
		city: 'perpignan',
		postcode: '90208'
	},
	email: 'mathys.aubert@example.com',
	picture: {
		medium: 'https://randomuser.me/api/portraits/med/men/66.jpg'
	}
};

function App() {
	return (
		<div>
			<div>
				{' '}
				<GenerateRandomUser />
			</div>

			<div>
				<GenerateEmployee />
			</div>
			<div>
				<DisplayEmployee employee={sampleEmployee} />
			</div>
		</div>
	);
}

export default App;
