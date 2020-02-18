import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import pollServices from "./services/poll";

import Header from "./components/Header";
import List from "./components/List";
import View from "./components/View";
import Form from "./components/Form";

const GlobalStyle = createGlobalStyle`
  html {
	font-family: 'Nunito', sans-serif;
	font-size: 16px;
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
			<Header />
			<Container>
				{polls ? (
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
				) : (
					<h1>Loading...</h1>
				)}
			</Container>
		</Router>
	);
};

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 0 20px;
`;

export default App;
