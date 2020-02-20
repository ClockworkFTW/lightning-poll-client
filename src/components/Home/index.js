import React from "react";
import styled from "styled-components";

import Welcome from "./Welcome";
import List from "./List";

const Home = ({ polls }) => (
	<Container>
		<Welcome />
		<List polls={polls} />
	</Container>
);

const Container = styled.div`
	padding: 1rem 0;
	height: 100vh;
	overflow: scroll;
	background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
`;

export default Home;
