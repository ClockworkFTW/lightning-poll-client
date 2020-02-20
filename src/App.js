import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import pollServices from "./services/poll";

import Loader from "./components/Common/Loader";
import Home from "./components/Home";
import Create from "./components/Create";
import Vote from "./components/Vote";

const GlobalStyle = createGlobalStyle`
  	html {
		box-sizing: border-box;
		font-family: 'Nunito', sans-serif;
		font-size: 16px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
`;

const App = () => {
	const [polls, setPolls] = useState(null);

	useEffect(() => {
		const fetchPolls = async () => {
			const polls = await pollServices.getAll();
			setPolls(polls);
		};
		fetchPolls();
	}, []);

	return (
		<Router>
			<GlobalStyle />
			{polls ? (
				<Switch>
					<Route path="/poll" exact>
						<Home polls={polls} />
					</Route>
					<Route path="/poll/new">
						<Create polls={polls} setPolls={setPolls} />
					</Route>
					<Route path="/poll/:id">
						<Vote polls={polls} setPolls={setPolls} />
					</Route>
				</Switch>
			) : (
				<Loader />
			)}
		</Router>
	);
};

export default App;
