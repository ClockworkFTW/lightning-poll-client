import React, { useState, useEffect } from "react";

import pollServices from "./services/poll";

import Form from "./components/Form";
import List from "./components/List";

const App = () => {
	const [polls, setPolls] = useState([]);

	useEffect(() => {
		const fetchPolls = async () => {
			const polls = await pollServices.getPolls();
			setPolls(polls);
		};
		fetchPolls();
	}, []);

	return (
		<div>
			<h1>Create Poll</h1>
			<Form polls={polls} setPolls={setPolls} />
			<List polls={polls} />
		</div>
	);
};

export default App;
