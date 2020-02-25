import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const getExpiration = settings => {
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

const Expiration = ({ settings }) => (
	<Container>
		<FontAwesomeIcon
			icon={["fal", "clock"]}
			style={{ marginRight: "0.5rem" }}
		/>
		{getExpiration(settings)}
	</Container>
);

const Container = styled.div`
	font-size: 0.875rem;
	color: #a0aec0;
`;

export default Expiration;
