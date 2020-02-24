import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import moment from "moment";

import { ButtonPrimary, ButtonCancel, ButtonBlank } from "../Common";

const Settings = ({ setSettings }) => {
	const [toggle, setToggle] = useState(false);

	const [time, setTime] = useState(1);
	const [int, setInt] = useState("m");

	const handleSave = () => {
		const expiration = moment().add(time, int);
		setSettings({ expiration });
		setToggle(!toggle);
	};

	return (
		<Container>
			<ButtonBlank
				type="button"
				fontSize="1.5rem"
				color="#545e74"
				onClick={() => setToggle(!toggle)}
			>
				<FontAwesomeIcon icon={["fal", "cog"]} />
			</ButtonBlank>
			{toggle && (
				<Modal>
					<Content
						initial={{ opacity: 0, y: 50, scale: 0.3 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{
							opacity: 0,
							scale: 0.5,
							transition: { duration: 0.2 }
						}}
					>
						<Header>Poll Settings</Header>
						<Body>
							<Expiration>
								<input
									type="number"
									placeholder="Poll ends in..."
									value={time}
									onChange={event =>
										setTime(event.target.value)
									}
									style={{ width: "50px" }}
								/>
								<IntervalButton
									type="button"
									onClick={() => setInt("m")}
									active={int === "m"}
								>
									Minutes
								</IntervalButton>
								<IntervalButton
									type="button"
									onClick={() => setInt("h")}
									active={int === "h"}
								>
									Hours
								</IntervalButton>
								<IntervalButton
									type="button"
									onClick={() => setInt("d")}
									active={int === "d"}
								>
									Days
								</IntervalButton>
							</Expiration>
						</Body>
						<Footer>
							<ButtonPrimary type="button" onClick={handleSave}>
								save
							</ButtonPrimary>
							<ButtonCancel
								type="button"
								onClick={() => setToggle(!toggle)}
							>
								exit
							</ButtonCancel>
						</Footer>
					</Content>
				</Modal>
			)}
		</Container>
	);
};

const Container = styled.div`
	margin-left: 1rem;
`;
const Modal = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.25rem;
	background: rgba(0, 0, 0, 0.3);
`;
const Content = styled(motion.div)`
	width: 100%;
	background: #ffffff;
	border-radius: 0.75rem;
	overflow: hidden;
`;
const Header = styled.h1`
	padding: 1rem;
	color: #545e74;
	background: #f6f8fa;
`;
const Body = styled.div`
	padding: 1rem;
`;
const Footer = styled.div`
	padding: 1rem;
	text-align: center;
`;
const Expiration = styled.div`
	display: flex;
`;

const IntervalButton = styled.button`
	padding: 0.5rem 1.25rem;
	border: none;
	outline: none;
	border-radius: 500px;
	background: ${props => (props.active ? "blue" : "none")};
	color: ${props => (props.active ? "white" : "none")};
`;

export default Settings;
