import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => (
	<Container>
		<Link to="/poll">home</Link>
		<Link to="/poll/new">create</Link>
	</Container>
);

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

export default Header;
