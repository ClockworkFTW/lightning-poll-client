import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";

import { Container } from "../Common";

const Display = ({ poll, handleVote, votePercent }) => {
	const [vote, setVote] = useState(null);
	const [voted, setVoted] = useState(false);

	return (
		<Container>
			<Header>
				<Title>{poll.title}</Title>
				<Created>{moment(poll.created).format("MMM DD, YYYY")}</Created>
			</Header>
			<Options>
				{poll.options.map((option, i) => (
					<Option key={i}>
						<Content onClick={() => setVote(i)} active={vote === i}>
							<Text>{option}</Text>
							{voted && <Bar width={votePercent(i)} />}
						</Content>
						{voted && (
							<Percent>{votePercent(i)}% people voted</Percent>
						)}
					</Option>
				))}
			</Options>
			<Button
				onClick={() => handleVote(vote, setVoted)}
				disabled={vote === null || voted}
			>
				{voted ? "Thanks for your response!" : "Vote"}
			</Button>
		</Container>
	);
};

const Header = styled.div``;
const Title = styled.h1`
	margin-bottom: 10px;
	font-family: "Nunito Sans", sans-serif;
	font-size: 1.25rem;
	font-weight: 800;
	color: #21334e;
`;
const Created = styled.h3`
	font-size: 0.875rem;
	color: #a0aec0;
`;
const Options = styled.ul`
	margin: 30px 0;
`;
const Option = styled.li`
	margin: 10px 0px;
`;
const Content = styled.div`
	position: relative;
	padding: 10px;
	border: 1px solid #f1f3f2;
	border-left: ${props =>
		props.active ? "4px solid #3960e4" : "1px solid #f1f3f2"};
	border-radius: 4px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		border-left: 4px solid #3960e4;
	}
`;
const Text = styled.h3`
	z-index: 10;
	position: relative;
	color: #21334e;
`;
const Percent = styled.h3`
	margin-top: 0.5rem;
	font-size: 0.75rem;
	color: #8a93a0;
`;
const Bar = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: ${props => `${props.width}%`};
	background: #f4f6f8;
`;
const Button = styled.button`
	width: 100%;
	padding: 1rem;
	outline: none;
	border: none;
	border-radius: 500px;
	background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
	font-family: inherit;
	font-size: 1rem;
	color: #ffffff;
	&:disabled {
		background: #f1f3f4;
		color: #8a93a0;
	}
	&:hover {
		cursor: pointer;
	}
`;

export default Display;
