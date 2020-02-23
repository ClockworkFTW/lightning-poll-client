import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Options = ({ options, setOptions }) => {
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
			{options.map((option, index) => (
				<Option key={index}>
					<Input
						type="text"
						placeholder={`Option ${index + 1}`}
						value={option}
						onChange={event =>
							editOption(event.target.value, index)
						}
					/>
					<RemoveButton onClick={event => removeOption(event, index)}>
						<FontAwesomeIcon icon={["fal", "minus-square"]} />
					</RemoveButton>
				</Option>
			))}
			<AddButton onClick={addOption}>
				<FontAwesomeIcon icon={["fal", "plus-square"]} />
			</AddButton>
		</Container>
	);
};

const Container = styled.ul`
	flex: 1;
	overflow: scroll;
`;
const Option = styled.li`
	position: relative;
	margin-bottom: 0.75rem;
`;
const Input = styled.input`
	width: 100%;
	padding: 0.875rem;
	border: 1px solid #f2f1f3;
	border-radius: 4px;
	font-size: 1rem;
	font-family: inherit;
	color: #21334f;
	&::placeholder {
		color: #818898;
	}
`;
const RemoveButton = styled.button`
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 1.5rem;
	color: #d5d6dc;
	border: none;
	outline: none;
	background: none;
`;
const AddButton = styled.button`
	font-size: 1.5rem;
	color: #d5d6dc;
	border: none;
	outline: none;
	background: none;
`;

export default Options;
