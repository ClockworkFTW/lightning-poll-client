import React from "react";
import { useParams } from "react-router-dom";

import pollServices from "../services/poll";

const View = ({ polls, setPolls }) => {
	const { id } = useParams();
	const poll = polls.find(poll => poll.link === id);

	const handleVote = async i => {
		const updatedPoll = await pollServices.vote(poll.link, i);
		const updatedPolls = polls.map(poll =>
			poll.link === id ? updatedPoll : poll
		);
		setPolls(updatedPolls);
	};

	return (
		<div>
			<h1>{poll.title}</h1>
			<ul>
				{poll.options.map((option, i) => (
					<li key={i} onClick={() => handleVote(i)}>
						<h4>
							<span>{poll.votes[i]}</span>
							{option}
						</h4>
					</li>
				))}
			</ul>
		</div>
	);
};

export default View;
