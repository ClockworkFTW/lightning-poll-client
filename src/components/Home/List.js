import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

import { Container } from "../Common";

const List = ({ polls }) => (
	<Container>
		{polls.map(poll => (
			<Card>
				<Header>
					<Metadata>
						<Category
							color={poll.category.color}
							background={poll.category.background}
						>
							{poll.category.name}
						</Category>
						<Created>
							{moment(poll.created).format("MMM DD, YYYY")}
						</Created>
					</Metadata>
					<Title>{poll.title}</Title>
					<Details>
						<AuthorProfile image={null} />
						<AuthorName>By {poll.author}</AuthorName>
						<Dot>&bull;</Dot>
						<Expiration>
							{poll.expiration
								? `Ends ${poll.expiration}`
								: "No end time"}
						</Expiration>
					</Details>
				</Header>
				<Options>
					{poll.options.map(option => (
						<Option>{option}</Option>
					))}
				</Options>
				<Footer>
					<RouterLink key={poll.link} to={`/poll/${poll.link}`}>
						View Poll
					</RouterLink>
				</Footer>
			</Card>
		))}
	</Container>
);

const Card = styled.div`
	margin-bottom: 1rem;
	padding: 1.5rem;
	border-radius: 0.5rem;
	background: #ffffff;
`;
const Header = styled.div`
	margin-bottom: 1rem;
`;
const Metadata = styled.div`
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
const Created = styled.h3`
	font-size: 0.875rem;
	color: #a0aec0;
`;
const Title = styled.h1`
	margin: 1.25rem 0 0.5rem 0;
	line-height: 1.5rem;
	font-family: "Nunito Sans", sans-serif;
	font-size: 1.125rem;
	font-weight: 800;
	color: #21334e;
`;
const Details = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.875rem;
	color: #a0aec0;
`;
const AuthorProfile = styled.div`
	width: 30px;
	height: 30px;
	margin-right: 0.5rem;
	border-radius: 100%;
	background-image: url("https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80");
	background-size: cover;
	box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
`;
const AuthorName = styled.h3`
	color: #21334e;
`;
const Dot = styled.span`
	margin: 0 0.5rem;
	color: #d9d9d9;
`;
const Expiration = styled.h3`
	color: #7d899a;
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
const Footer = styled.div`
	text-align: center;
`;
const RouterLink = styled(Link)`
	padding: 0.5rem 1.5rem;
	border-radius: 500px;
	text-decoration: none;
	font-size: 0.875rem;
	font-weight: 700;
	background: #f4f7fd;
	color: #3b5ac9;
`;

export default List;
