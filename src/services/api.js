import Axios from "axios";

const api = {
	highlights: Axios.create({
		baseURL: "http://localhost:5000/api/places",
	}),
};

export default api;
