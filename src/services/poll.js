import axios from "axios";

const URL = "http://localhost:3005/poll";

const getPolls = async () => {
	const result = await axios.get(URL);
	return result.data;
};

const createPoll = async poll => {
	const result = await axios.post(URL, poll);
	return result.data;
};

const votePoll = async vote => {
	const result = await axios.patch(URL, vote);
	return result.data;
};

export default { getPolls, createPoll, votePoll };
