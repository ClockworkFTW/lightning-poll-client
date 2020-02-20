import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "../Common";

const Header = ({ path, link }) => (
	<Wrapper>
		<Container>
			<RouterLink to={path}>{link}</RouterLink>
		</Container>
	</Wrapper>
);

const Wrapper = styled.div`
	background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
`;

const RouterLink = styled(Link)`
	text-decoration: none;
	color: #ffffff;
`;

export default Header;
