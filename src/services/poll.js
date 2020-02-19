import axios from "axios";

const URL = "http://localhost:3005/poll";

const getAll = async () => {
	const result = await axios.get(URL);
	return result.data;
};

const create = async poll => {
	const result = await axios.post(URL, poll);
	return result.data;
};

const vote = async (link, vote) => {
	const result = await axios.patch(`${URL}/${link}`, vote);
	return result.data;
};

export default { getAll, create, vote };
