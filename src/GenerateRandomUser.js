import React, { useState } from 'react';

function App() {
	const [user, setUser] = useState();

	function getUser() {
		fetch('https://randomuser.me/api')
			.then(r => r.json())
			.then(data => {
				setUser(data.results[0]);
			});
		// .then(({ results: [user] }) => {
		// 	setUser(user);
		// });
	}

	if (!user) return <button onClick={getUser}>Get User</button>;

	const {
		name: { title, first, last },
		picture: { large }
	} = user;

	return (
		<div>
			<h1>
				{title} {first} {last}
			</h1>
			<div>
				<img src={large} alt="very nice looking pic" />
			</div>
			<button onClick={getUser}>get different user</button>
		</div>
	);
}

export default App;
