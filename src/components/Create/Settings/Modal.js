import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import { ButtonPrimary, ButtonCancel } from "../../Common";
import Expiration from "./Expiration";
import Setting from "./Setting";

const Modal = ({ toggle, setToggle, setSettings }) => {
	const [time, setTime] = useState(1);
	const [int, setInt] = useState("m");

	const [prvLink, setPrvLink] = useState(false);
	const [ipBlock, setIpBlock] = useState(false);

	const handleSave = () => {
		const expiration = moment().add(time, int);
		setSettings({ expiration, prvLink, ipBlock });
		setToggle(!toggle);
	};

	return (
		toggle && (
			<Wrapper>
				<Content>
					<Header>Poll Settings</Header>
					<Body>
						<Expiration
							time={time}
							setTime={setTime}
							int={int}
							setInt={setInt}
						/>
						<Setting
							header="Private (only via direct link)"
							setting={prvLink}
							setSetting={setPrvLink}
						/>
						<Setting
							header="Allow multiple votes from one IP"
							setting={ipBlock}
							setSetting={setIpBlock}
						/>
					</Body>
					<Footer>
						<ButtonPrimary
							type="button"
							margin="0 1rem"
							onClick={handleSave}
						>
							save
						</ButtonPrimary>
						<ButtonCancel
							type="button"
							margin="0 1rem"
							onClick={() => setToggle(!toggle)}
						>
							exit
						</ButtonCancel>
					</Footer>
				</Content>
			</Wrapper>
		)
	);
};

const Wrapper = styled.div`
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
const Content = styled.div`
	width: 100%;
	background: #ffffff;
	border-radius: 0.75rem;
	overflow: hidden;
`;
const Header = styled.h1`
	padding: 1.5rem;
	background: #f6f8fa;
	font-size: 1.125rem;
	color: #21334e;
`;
const Body = styled.div`
	padding: 1.5rem;
`;
const Footer = styled.div`
	padding: 0 1.5rem 1.5rem 1.5rem;
	text-align: center;
`;

export default Modal;
