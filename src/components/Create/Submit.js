import React from "react";
import styled from "styled-components";

const Form = ({ disabled, status }) => (
	<Container>
		<Button type="submit" disabled={disabled}>
			{status()}
		</Button>
	</Container>
);

const Container = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px;
	right: 20px;
`;

const Button = styled.button`
	width: 100%;
	padding: 1rem;
	outline: none;
	border: none;
	border-radius: 500px;
	background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
	font-family: inherit;
	font-size: 1rem;
	color: #ffffff;
	&:disabled {
		background: #f1f3f4;
		color: #8a93a0;
	}
	&:hover {
		cursor: pointer;
	}
`;

export default Form;
