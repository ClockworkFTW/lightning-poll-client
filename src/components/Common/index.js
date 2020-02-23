import styled, { createGlobalStyle } from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
library.add(fal);

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

export const Container = styled.div`
	position: relative;
	max-width: 600px;
	margin: 0 auto;
	padding: 1.25rem;
`;
