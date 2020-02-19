import React from "react";
import { Link } from "react-router-dom";

const Home = ({ polls }) =>
	polls.map(poll => (
		<Link key={poll.link} to={`/poll/${poll.link}`}>
			<div>
				<h3>{poll.title}</h3>
			</div>
		</Link>
	));

export default Home;
