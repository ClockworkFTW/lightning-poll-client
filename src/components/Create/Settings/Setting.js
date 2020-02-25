import React from "react";
import styled from "styled-components";

import { ButtonBlank } from "../../Common";

const Modal = ({ header, setting, setSetting }) => (
	<Container>
		<Header>{header}</Header>
		<ButtonBlank type="button" onClick={() => setSetting(!setting)}>
			{setting ? "yes" : "no"}
		</ButtonBlank>
	</Container>
);

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.5rem;
	padding-top: 1.5rem;
	border-top: 1px solid #e2e2e2;
`;

const Header = styled.h1`
	font-size: 0.875rem;
	color: #21334e;
`;

export default Modal;
