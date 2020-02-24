import React from "react";

import { ButtonAction } from "../Common";

const Form = ({ disabled, status }) => (
	<ButtonAction type="submit" width="100%" disabled={disabled}>
		{status()}
	</ButtonAction>
);

export default Form;
