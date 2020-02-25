import React from "react";
import styled from "styled-components";

const Expiraiton = ({ time, setTime, int, setInt }) => (
	<Container>
		<Header>Poll ends in</Header>
		<Input
			type="number"
			value={time}
			onChange={event => setTime(event.target.value)}
		/>
		<Button type="button" onClick={() => setInt("m")} active={int === "m"}>
			Mins
		</Button>
		<Button type="button" onClick={() => setInt("h")} active={int === "h"}>
			Hours
		</Button>
		<Button type="button" onClick={() => setInt("d")} active={int === "d"}>
			Days
		</Button>
	</Container>
);

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Header = styled.header`
	font-size: 0.875rem;
	color: #21334e;
`;

const Input = styled.input`
	width: 30px;
	text-align: center;
`;

const Button = styled.button`
	padding: 0.5rem 1.25rem;
	border: none;
	outline: none;
	border-radius: 500px;
	background: ${props => (props.active ? "blue" : "none")};
	color: ${props => (props.active ? "white" : "none")};
`;

export default Expiraiton;
