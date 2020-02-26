import React from "react";
import styled from "styled-components";

const Metadata = ({ category, votes }) => (
	<Container>
		<Category color={category.color} background={category.background}>
			{category.name}
		</Category>
		<Votes>{votes.length} Votes</Votes>
	</Container>
);

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Category = styled.h3`
	padding: 6px 12px;
	text-transform: uppercase;
	font-size: 0.75rem;
	font-weight: 700;
	border-radius: 500px;
	color: ${props => props.color};
	background: ${props => props.background};
`;
const Votes = styled.h3`
	font-size: 0.875rem;
	color: #a0aec0;
`;

export default Metadata;
