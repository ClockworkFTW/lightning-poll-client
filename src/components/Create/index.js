import React, { useState } from "react";
import { Link } from "react-router-dom";

import pollServices from "../../services/poll";
import Header from "../Common/Header";
import Form from "./Form";

const Create = ({ polls, setPolls }) => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);

	const handleSubmit = async (event, poll) => {
		event.preventDefault();
		setLoading(true);
		try {
			const newPoll = await pollServices.create(poll);
			setLoading(false);
			setSuccess(true);
			setPolls([...polls, newPoll]);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	const renderButton = () => {
		if (error) {
			return "something went wrong...";
		} else if (success) {
			return "poll created";
		} else if (loading) {
			return "loading...";
		} else {
			return "create poll";
		}
	};

	return (
		<>
			<Header>
				<Link to="/poll">home</Link>
			</Header>
			<Form handleSubmit={handleSubmit} renderButton={renderButton} />
		</>
	);
};

export default Create;
