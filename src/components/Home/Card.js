import React from "react";
import styled from "styled-components";

import { ButtonPrimary, RouterLink } from "../Common";
import Metadata from "./Metadata";
import Expiration from "./Expiration";

const Card = ({ poll }) => (
	<Container>
		<Header>
			<Metadata category={poll.category} votes={poll.votes} />
			<Title>{poll.title}</Title>
			<Expiration
				created={poll.created}
				expiration={poll.settings.expiration}
			/>
		</Header>
		<Options>
			{poll.options.map((option, i) => (
				<Option key={i}>{option}</Option>
			))}
		</Options>
		<Footer>
			<RouterLink key={poll.link} to={`/poll/${poll.link}`}>
				<ButtonPrimary>view poll</ButtonPrimary>
			</RouterLink>
		</Footer>
	</Container>
);

const Container = styled.div`
	margin-bottom: 1rem;
	padding: 1.5rem;
	border-radius: 0.5rem;
	background: #ffffff;
`;
const Header = styled.div`
	margin-bottom: 1rem;
`;
const Title = styled.h1`
	margin: 1rem 0 0.75rem 0;
	line-height: 1.5rem;
	font-family: "Nunito Sans", sans-serif;
	font-size: 1.125rem;
	font-weight: 800;
	color: #21334e;
`;
const Options = styled.ul`
	margin: 30px 0;
`;
const Option = styled.li`
	margin: 0.75rem 0px;
	padding: 0.75rem;
	border: 1px solid #f1f3f2;
	border-radius: 4px;
	font-size: 1rem;
	color: #21334e;
`;
const Footer = styled.div`
	text-align: center;
`;

export default Card;
