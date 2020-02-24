import React, { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

import pollServices from "../../services/poll";
import { Container } from "../Common";
import Header from "../Common/Header";
import Info from "./Info";
import Options from "./Options";
import Submit from "./Submit";

const Vote = ({ polls, setPolls }) => {
	const { id } = useParams();
	const poll = polls.find(poll => poll.link === id);

	const [vote, setVote] = useState(null);
	const [voted, setVoted] = useState(false);

	const locked = moment(poll.settings.expiration) < moment();

	const handleVote = async () => {
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
			<Header path="/poll" link="Poll Details" />
			<Container>
				<Layout>
					<Info poll={poll} />
					<Options
						options={poll.options}
						vote={vote}
						setVote={setVote}
						votePercent={votePercent}
						locked={locked}
					/>
					<Submit
						vote={vote}
						voted={voted}
						handleVote={handleVote}
						locked={locked}
					/>
				</Layout>
			</Container>
		</>
	);
};

const Layout = styled.div`
	height: calc(100vh - 57px);
	padding: 1.25rem 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default Vote;
