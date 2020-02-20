import React, { useState } from "react";
import styled from "styled-components";

import { categories } from "../../config";

const Categories = ({ category, setCategory }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<Container onClick={() => setToggle(!toggle)}>
			{toggle ? (
				categories.map(cat => (
					<Category
						active={cat.name === category.name}
						color={cat.color}
						onClick={() => setCategory(cat)}
					>
						{cat.name}
					</Category>
				))
			) : (
				<Category color={category.color}>{category.name}</Category>
			)}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	margin: 1rem 0;
	overflow: scroll;
`;
const Category = styled.h3`
	margin-right: 0.5rem;
	opacity: 0.5;
	padding: 0.5rem 1rem;
	border-radius: 500px;
	font-size: 0.875rem;
	background: ${props => props.color};
	color: #ffffff;
`;

export default Categories;
