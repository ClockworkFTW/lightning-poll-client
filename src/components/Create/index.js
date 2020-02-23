import React, { useState } from "react";
import styled from "styled-components";

import pollServices from "../../services/poll";
import Header from "../Common/Header";
import { Container } from "../Common";
import Categories from "./Categories";
import Question from "./Question";
import Options from "./Options";
import Submit from "./Submit";
import Settings from "./Settings";

const Create = ({ polls, setPolls }) => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);

	const [title, setTitle] = useState("");
	const [category, setCategory] = useState({
		name: "category",
		color: "#4A5568",
		background: "#EDF2F7"
	});
	const [options, setOptions] = useState(["", ""]);
	const [settings, setSettings] = useState({ expiration: null });

	const handleSubmit = async event => {
		event.preventDefault();
		setLoading(true);
		try {
			const newPoll = await pollServices.create({
				title,
				category,
				options,
				settings
			});
			setLoading(false);
			setSuccess(true);
			setPolls([...polls, newPoll]);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	const disabled = title.length < 20 || options.length < 3;

	const submitStatus = () => {
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
			<Header path="/poll" link="Create Poll" />
			<Container>
				<Form onSubmit={handleSubmit}>
					<Categories category={category} setCategory={setCategory} />
					<Question title={title} setTitle={setTitle} />
					<Options options={options} setOptions={setOptions} />
					<Footer>
						<Submit disabled={disabled} status={submitStatus} />
						<Settings setSettings={setSettings} />
					</Footer>
				</Form>
			</Container>
		</>
	);
};

const Form = styled.form`
	height: calc(100vh - 97px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Footer = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Create;
