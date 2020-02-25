import React from "react";
import styled from "styled-components";

import Metadata from "../Home/Metadata";
import Expiration from "../Home/Expiration";

const Info = ({ poll }) => (
	<Container>
		<Metadata category={poll.category} votes={poll.votes} />
		<Title>{poll.title}</Title>
		<Expiration settings={poll.settings} />
	</Container>
);

const Container = styled.div``;

const Title = styled.h1`
	margin: 1.25rem 0 0.75rem 0;
	line-height: 1.75rem;
	font-family: "Nunito Sans", sans-serif;
	font-size: 1.25rem;
	font-weight: 800;
	color: #21334e;
`;

export default Info;
