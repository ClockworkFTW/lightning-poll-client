import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

import { Container } from "../Common";

const List = ({ polls }) => (
	<Container>
		{polls.map(poll => (
			<RouterLink key={poll.link} to={`/poll/${poll.link}`}>
				<Card>
					<Metadata>
						<AuthorProfile image={null} />
						<AuthorName>By {poll.author}</AuthorName>
						<Dot>&middot;</Dot>
						<Expiration>
							{poll.expiration
								? `Ends ${poll.expiration}`
								: "No end time"}
						</Expiration>
					</Metadata>
					<Title>{poll.title}</Title>
					<Header>
						<Category>{poll.category}</Category>
						<Created>
							{moment(poll.created).format("MMM DD, YYYY")}
						</Created>
					</Header>
					<Options>
						{poll.options.map(option => (
							<Option>{option}</Option>
						))}
					</Options>
				</Card>
			</RouterLink>
		))}
	</Container>
);

const RouterLink = styled(Link)`
	text-decoration: none;
`;
const Card = styled.div`
	margin-bottom: 1rem;
	padding: 1.5rem;
	border-radius: 0.5rem;
	background: #ffffff;
`;
const Metadata = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	font-size: 0.875rem;
	color: #a0aec0;
`;
const AuthorProfile = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 1rem;
	border-radius: 100%;
	background: #a0aec0;
`;
const AuthorName = styled.h3`
	color: #21334e;
`;
const Dot = styled.span`
	margin: 0 0.5rem;
`;
const Expiration = styled.h3`
	color: #7d899a;
`;
const Title = styled.h1`
	margin-bottom: 10px;
	font-family: "Nunito Sans", sans-serif;
	font-size: 1.125rem;
	font-weight: 800;
	color: #21334e;
`;
const Header = styled.div`
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
	color: #ffffff;
	background: #33c6fe;
`;
const Created = styled.h3`
	font-size: 0.875rem;
	color: #a0aec0;
`;
const Options = styled.ul`
	margin: 30px 0;
`;
const Option = styled.li`
	margin: 10px 0px;
	padding: 10px;
	border: 1px solid #f1f3f2;
	border-radius: 4px;
	color: #21334e;
`;

export default List;
