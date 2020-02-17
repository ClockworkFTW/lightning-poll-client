import React, { useState } from "react";
import pollServices from "../services/poll";

const Form = ({ polls, setPolls }) => {
	const [title, setTitle] = useState("");
	const [options, setOptions] = useState([]);

	const handleSubmit = async event => {
		event.preventDefault();
		const newPoll = await pollServices.createPoll({ title, options });
		setPolls([...polls, newPoll]);
	};

	const addOption = event => {
		event.preventDefault();
		setOptions([...options, ""]);
	};

	const editOption = (value, index) => {
		const newOptions = options.map((e, i) => (i === index ? value : e));
		setOptions(newOptions);
	};

	const removeOption = (event, index) => {
		event.preventDefault();
		setOptions(options.filter((e, i) => i !== index));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={event => setTitle(event.target.value)}
			/>
			<div>
				{options.map((option, index) => (
					<div key={index}>
						<input
							type="text"
							placeholder={`Option ${index + 1}`}
							value={option}
							onChange={event =>
								editOption(event.target.value, index)
							}
						/>
						<button onClick={event => removeOption(event, index)}>
							remove option
						</button>
					</div>
				))}
				<button onClick={addOption}>add option</button>
			</div>
			<button type="submit">create poll</button>
		</form>
	);
};

export default Form;
