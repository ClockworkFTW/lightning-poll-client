import React, { useState } from "react";
import styled from "styled-components";

import { Container, ButtonAction } from "../Common";
import Metadata from "../Home/Metadata";
import Details from "../Home/Details";

const Display = ({ poll, handleVote, votePercent }) => {
	const [vote, setVote] = useState(null);
	const [voted, setVoted] = useState(false);

	return (
		<Container>
			<Layout>
				<Header>
					<Metadata category={poll.category} votes={poll.votes} />
					<Title>{poll.title}</Title>
					<Details author={poll.author} settings={poll.settings} />
				</Header>
				<Body>
					{poll.options.map((option, i) => (
						<Option key={i}>
							<Content
								onClick={() => setVote(i)}
								active={vote === i}
							>
								<Text>{option}</Text>
								{voted && <Bar width={votePercent(i)} />}
							</Content>
							{voted && (
								<Percent>
									{votePercent(i)}% people voted
								</Percent>
							)}
						</Option>
					))}
				</Body>
				<Footer>
					<ButtonAction
						onClick={() => handleVote(vote, setVoted)}
						width="100%"
						disabled={vote === null || voted}
					>
						{voted ? "Thanks for your response!" : "Vote"}
					</ButtonAction>
				</Footer>
			</Layout>
		</Container>
	);
};

const Layout = styled.div`
	height: calc(100vh - 57px);
	padding: 1.25rem 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const Header = styled.div``;
const Title = styled.h1`
	margin: 1.25rem 0 0.5rem 0;
	line-height: 1.75rem;
	font-family: "Nunito Sans", sans-serif;
	font-size: 1.25rem;
	font-weight: 800;
	color: #21334e;
`;
const Body = styled.ul`
	flex: 1;
	margin: 30px 0;
`;
const Option = styled.li`
	margin: 10px 0px;
`;
const Content = styled.div`
	position: relative;
	padding: 0.75rem;
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
const Footer = styled.div`
	text-align: center;
`;

export default Display;
