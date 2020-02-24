import styled, { createGlobalStyle, css } from "styled-components";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
library.add(fal);

// Global

export const GlobalStyle = createGlobalStyle`
  	html {
		box-sizing: border-box;
		font-family: 'Nunito', sans-serif;
		font-size: 16px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
`;

// Layout

export const Container = styled.div`
	position: relative;
	max-width: 600px;
	margin: 0 auto;
	padding: 0 1.25rem;
`;

// Buttons

const sharedButton = css`
	width: ${props => props.width};
	margin: ${props => props.margin};
	padding: 0.5rem 1.25rem;
	outline: none;
	border: none;
	border-radius: 500px;
	font-family: inherit;
	font-size: 0.875rem;
	text-transform: capitalize;
	&:disabled {
		background: #f1f3f4;
		color: #8a93a0;
	}
	&:hover {
		cursor: pointer;
	}
`;

export const ButtonPrimary = styled.button`
	${sharedButton}
	background: #f4f7fd;
	color: #3b5ac9;
`;

export const ButtonAction = styled.button`
	${sharedButton}
	background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
	color: #ffffff;
`;

export const ButtonCancel = styled.button`
	${sharedButton}
	background: #f1f3f4;
	color: #8a93a0;
`;

export const ButtonBlank = styled.button`
	margin: ${props => props.margin || "none"};
	padding: ${props => props.padding || "none"};
	outline: none;
	border: none;
	background: none;
	font-size: ${props => props.fontSize};
	color: ${props => props.color};
`;

export const RouterLink = styled(Link)`
	text-decoration: none;
`;
