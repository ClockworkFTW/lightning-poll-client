import React, { useState } from "react";
import styled from "styled-components";

import { categories } from "../../config";

const Categories = ({ category, setCategory }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<Container onClick={() => setToggle(!toggle)}>
			{toggle ? (
				categories.map((cat, i) => (
					<Category
						key={i}
						active={cat.name === category.name}
						color={cat.color}
						background={cat.background}
						onClick={() => setCategory(cat)}
					>
						{cat.name}
					</Category>
				))
			) : (
				<Category
					color={category.color}
					background={category.background}
				>
					{category.name}
				</Category>
			)}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	overflow: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
const Category = styled.h3`
	margin-right: 0.5rem;
	padding: 0.5rem 1rem;
	border-radius: 500px;
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
	background: ${props => props.background};
	color: ${props => props.color};
`;

export default Categories;
