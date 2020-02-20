import React from "react";
import { Link, useParams } from "react-router-dom";

import pollServices from "../../services/poll";
import Header from "../Common/Header";
import Display from "./Display";

const Vote = ({ polls, setPolls }) => {
	const { id } = useParams();
	const poll = polls.find(poll => poll.link === id);

	const handleVote = async (vote, setVoted) => {
		const updatedPoll = await pollServices.vote(poll.link, { vote });
		const updatedPolls = polls.map(poll =>
			poll.link === id ? updatedPoll : poll
		);
		setPolls(updatedPolls);
		setVoted(true);
	};

	const votePercent = i => {
		const { votes } = poll;
		const total = votes.reduce((acc, cur) => acc + cur, 0);
		const percent = Math.round((votes[i] / total) * 100);
		return percent ? percent : 0;
	};

	return (
		<>
			<Header path="/poll" link="poll details" />
			<Display
				poll={poll}
				handleVote={handleVote}
				votePercent={votePercent}
			/>
		</>
	);
};

export default Vote;
