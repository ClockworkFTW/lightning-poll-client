import axios from "axios";

const URL = "https://api.ipify.org";

const get = async () => {
	const result = await axios.get(URL);
	return result.data;
};

export default { get };
