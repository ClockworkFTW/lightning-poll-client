import React from "react";
import styled from "styled-components";

import { Container } from "../Common";

const Header = ({ children }) => (
	<Wrapper>
		<Container>{children}</Container>
	</Wrapper>
);

const Wrapper = styled.div`
	background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
`;

export default Header;
