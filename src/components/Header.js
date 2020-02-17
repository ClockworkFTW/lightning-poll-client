import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<div>
		<Link to="/poll">home</Link>
		<Link to="/poll/new">create</Link>
	</div>
);

export default Header;
