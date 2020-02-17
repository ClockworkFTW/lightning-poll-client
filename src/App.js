import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import pollServices from "./services/poll";

import Header from "./components/Header";
import List from "./components/List";
import View from "./components/View";
import Form from "./components/Form";

const App = () => {
	const [polls, setPolls] = useState([]);

	useEffect(() => {
		const fetchPolls = async () => {
			const polls = await pollServices.getAll();
			setPolls(polls);
		};
		fetchPolls();
	}, []);

	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/poll" exact>
					<List polls={polls} />
				</Route>
				<Route path="/poll/new">
					<Form polls={polls} setPolls={setPolls} />
				</Route>
				<Route path="/poll/:id">
					<View polls={polls} setPolls={setPolls} />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
