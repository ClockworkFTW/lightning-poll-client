import React from "react";
import styled from "styled-components";

import Metadata from "../Home/Metadata";
import Details from "../Home/Details";

const Info = ({ poll }) => (
	<Container>
		<Metadata category={poll.category} votes={poll.votes} />
		<Title>{poll.title}</Title>
		<Details author={poll.author} settings={poll.settings} />
	</Container>
);

const Container = styled.div``;

const Title = styled.h1`
	margin: 1.25rem 0 0.5rem 0;
	line-height: 1.75rem;
	font-family: "Nunito Sans", sans-serif;
	font-size: 1.25rem;
	font-weight: 800;
	color: #21334e;
`;

export default Info;
