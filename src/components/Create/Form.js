import React, { useState } from "react";
import styled from "styled-components";

import { Container } from "../Common";
import Categories from "./Categories";

const Form = ({ handleSubmit, renderButton }) => {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState({
		name: "category",
		color: "grey"
	});
	const [options, setOptions] = useState(["", ""]);

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
		<Container>
			<form onSubmit={() => handleSubmit({ title, category, options })}>
				<Question>
					<QuestionInput
						type="text"
						placeholder="What do you want to ask?"
						value={title}
						onChange={event => setTitle(event.target.value)}
					/>
					<QuestionLimit>{title.length}/100</QuestionLimit>
				</Question>
				<Categories category={category} setCategory={setCategory} />
				<Options>
					{options.map((option, index) => (
						<Option key={index}>
							<OptionInput
								type="text"
								placeholder={`Add option ${index + 1}`}
								value={option}
								onChange={event =>
									editOption(event.target.value, index)
								}
							/>
							<OptionButton
								onClick={event => removeOption(event, index)}
							>
								remove
							</OptionButton>
						</Option>
					))}
					<button onClick={addOption}>add</button>
				</Options>
				<CreateButton
					type="submit"
					disabled={title.length < 20 || options.length < 2}
				>
					{renderButton()}
				</CreateButton>
			</form>
		</Container>
	);
};

const Question = styled.div``;
const QuestionInput = styled.textarea`
	width: 100%;
	height: 220px;
	padding: 0;
	border: none;
	outline: none;
	font-family: "Nunito Sans", sans-serif;
	font-size: 2rem;
	font-weight: 800;
	color: #21334f;
	resize: none;
	&::placeholder {
		color: #d5d6dc;
	}
`;
const QuestionLimit = styled.span`
	font-size: 0.75rem;
`;
const Options = styled.ul``;
const Option = styled.li``;
const OptionInput = styled.input`
	width: 100%;
	padding: 0.875rem;
	border: 1px solid #f2f1f3;
	border-radius: 4px;
	font-size: 1rem;
	font-family: inherit;
	color: #21334f;
	&::placeholder {
		color: #d5d6dc;
	}
`;
const OptionButton = styled.button``;
const CreateButton = styled.button`
	width: 100%;
	padding: 1rem;
	outline: none;
	border: none;
	border-radius: 500px;
	background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
	font-family: inherit;
	font-size: 1rem;
	color: #ffffff;
	&:disabled {
		background: #f1f3f4;
		color: #8a93a0;
	}
	&:hover {
		cursor: pointer;
	}
`;

export default Form;
