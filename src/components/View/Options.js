import React from "react";
import styled from "styled-components";

const Options = ({ options, vote, setVote, votePercent, locked }) => (
	<Container>
		{options.map((option, i) => (
			<Option key={i}>
				<Content onClick={() => setVote(i)} active={vote === i}>
					<Text>{option}</Text>
					{locked && <Bar width={votePercent(i)} />}
				</Content>
				{locked && <Percent>{votePercent(i)}% people voted</Percent>}
			</Option>
		))}
	</Container>
);

const Container = styled.ul`
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

export default Options;
