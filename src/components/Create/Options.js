import React from "react";
import styled from "styled-components";

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
						placeholder={`Add option ${index + 1}`}
						value={option}
						onChange={event =>
							editOption(event.target.value, index)
						}
					/>
					<Button onClick={event => removeOption(event, index)}>
						remove
					</Button>
				</Option>
			))}
			<button onClick={addOption}>add</button>
		</Container>
	);
};

const Container = styled.ul``;
const Option = styled.li``;
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
const Button = styled.button``;

export default Options;
