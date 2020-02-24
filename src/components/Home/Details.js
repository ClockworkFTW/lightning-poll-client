import React from "react";
import moment from "moment";
import styled from "styled-components";

const Details = ({ author, settings }) => {
	const getExpiration = () => {
		const expiration = settings.expiration;
		if (expiration) {
			const now = moment();
			const end = moment(expiration);
			const time = now.to(end);
			const lang = now > end ? "Ended" : "Ends";
			return `${lang} ${time}`;
		} else {
			return "No end Time";
		}
	};

	return (
		<Container>
			<AuthorProfile image={null} />
			<AuthorName>By {author}</AuthorName>
			<Dot>&bull;</Dot>
			<Expiration>{getExpiration()}</Expiration>
		</Container>
	);
};

const Container = styled.div`
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

export default Details;
