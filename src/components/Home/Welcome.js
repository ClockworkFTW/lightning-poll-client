import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Welcome = () => (
	<Container>
		<Title>Welcome to Lightning Poll</Title>
		<Intro>Create polls with ease and share them with your friends.</Intro>
		<RouterLink to="/poll/new">Create</RouterLink>
	</Container>
);

const Container = styled.div`
	margin-bottom: 2rem;
`;
const Title = styled.h1`
	font-family: "Nunito Sans", sans-serif;
	font-size: 1.5rem;
	font-weight: 800;
	color: #ffffff;
`;
const Intro = styled.p`
	opacity: 0.7;
	margin: 1rem 0 2rem 0;
	color: #ffffff;
`;
const RouterLink = styled(Link)`
	padding: 0.5rem 1.75rem;
	border-radius: 500px;
	text-decoration: none;
	font-size: 0.875rem;
	font-weight: 700;
	background: #ffffff;
	color: #42b8fe;
`;

export default Welcome;
