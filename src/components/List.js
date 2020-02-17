import React from "react";

const List = ({ polls }) =>
	polls.map(poll => (
		<div key={poll.link}>
			<h3>{poll.title}</h3>
		</div>
	));

export default List;
