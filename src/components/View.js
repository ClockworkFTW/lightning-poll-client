import React, { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

import { usePrevious } from "../utilities";
import pollServices from "../services/poll";

const View = ({ polls, setPolls }) => {
	const { id } = useParams();
	const poll = polls.find(poll => poll.link === id);

	const [vote, setVote] = useState(null);
	const prevVote = usePrevious(vote);
	const showResult = vote !== null;

	const handleVote = async i => {
		setVote(i);
		const updatedPoll = await pollServices.vote(poll.link, {
			curr: i,
			prev: prevVote
		});
		const updatedPolls = polls.map(poll =>
			poll.link === id ? updatedPoll : poll
		);
		setPolls(updatedPolls);
	};

	const votePercent = i => {
		const { votes } = poll;
		const total = votes.reduce((acc, cur) => acc + cur, 0);
		const percent = Math.round((votes[i] / total) * 100);
		return percent ? percent : 0;
	};

	return (
		<Wrapper>
			<Image />
			<Container>
				<Header>
					<Title>{poll.title}</Title>
					<Created>
						{moment(poll.created).format("MMM DD, YYYY")}
					</Created>
				</Header>
				<Options>
					{poll.options.map((option, i) => (
						<Option key={i} onClick={() => handleVote(i)}>
							<Content>
								<Radio active={vote === i} />
								<Text active={vote === i}>{option}</Text>
								{showResult && (
									<Percent active={vote === i}>
										{votePercent(i)}%
									</Percent>
								)}
							</Content>
							{showResult && <Bar width={votePercent(i)} />}
						</Option>
					))}
				</Options>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	overflow: hidden;
	border-radius: 20px;
	box-shadow: 0 10px 15px -3px rgba(43, 108, 176, 0.1),
		0 4px 6px -2px rgba(43, 108, 176, 0.05);
`;
const Image = styled.div`
	height: 200px;
	background: #1e4eca;
`;
const Container = styled.div`
	padding: 40px;
`;
const Header = styled.div`
	margin-bottom: 30px;
`;
const Title = styled.h1`
	margin-bottom: 10px;
	font-family: "Nunito Sans", sans-serif;
	font-size: 1.25rem;
	color: #2d3748;
`;
const Created = styled.h3`
	font-size: 0.875rem;
	color: #a0aec0;
`;
const Options = styled.ul``;
const Option = styled.li`
	position: relative;
	margin: 10px 0px;
	padding: 10px;
	border-radius: 100px;
	background: #f1f4ff;
	overflow: hidden;
	&:hover {
		cursor: pointer;
	}
`;
const Content = styled.div`
	z-index: 10;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Radio = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 10px;
	border: 4px solid #ffffff;
	border-radius: 50%;
	background: #3d7aff;
	opacity: ${props => (props.active ? 1 : 0.5)};
`;
const Text = styled.h3`
	flex: 1;
	font-weight: ${props => (props.active ? "900" : "400")};
	color: ${props => (props.active ? "#3d7aff" : "#7a839b")};
`;
const Percent = styled.h3`
	font-weight: ${props => (props.active ? "900" : "400")};
	color: ${props => (props.active ? "#3d7aff" : "#7a839b")};
`;
const Bar = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: ${props => `${props.width}%`};
	background: #dfe9ff;
`;

export default View;
