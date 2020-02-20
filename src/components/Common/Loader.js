import React from "react";
import styled from "styled-components";

const Loader = () => (
	<Container>
		<Message>Loading...</Message>
	</Container>
);

const Container = styled.div`
	height: 100vh;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
`;

const Message = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	color: #ffffff;
`;

export default Loader;
