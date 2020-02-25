import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonBlank } from "../../Common";
import Modal from "./Modal";

const Settings = ({ setSettings }) => {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<ButtonBlank
				type="button"
				margin="0 0 0 1rem"
				fontSize="1.5rem"
				color="#545e74"
				onClick={() => setToggle(!toggle)}
			>
				<FontAwesomeIcon icon={["fal", "cog"]} />
			</ButtonBlank>
			<Modal
				toggle={toggle}
				setToggle={setToggle}
				setSettings={setSettings}
			/>
		</>
	);
};

export default Settings;
