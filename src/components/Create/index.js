import React, { useState } from "react";

import pollServices from "../../services/poll";
import Header from "../Common/Header";
import { Container } from "../Common";
import Categories from "./Categories";
import Question from "./Question";
import Options from "./Options";
import Submit from "./Submit";

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

	const handleSubmit = async event => {
		event.preventDefault();
		setLoading(true);
		try {
			const newPoll = await pollServices.create({
				title,
				category,
				options
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
			<Header path="/poll" link="create poll" />
			<Container>
				<form onSubmit={handleSubmit}>
					<Categories category={category} setCategory={setCategory} />
					<Question title={title} setTitle={setTitle} />
					<Options options={options} setOptions={setOptions} />
					<Submit disabled={disabled} status={submitStatus} />
				</form>
			</Container>
		</>
	);
};

export default Create;
