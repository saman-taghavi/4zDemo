import axios from "axios";
import {
	changeCaseRequestInterceptor,
	changeCaseResponseInterceptor,
} from "utils/axiosInterceptors";

const client = axios.create({
	baseURL: process.env.BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

// add a request interceptor
const caseRequestInterceptor = client.interceptors.request.use(
	changeCaseRequestInterceptor.config,
	changeCaseRequestInterceptor.error,
);
// add a response interceptor
const caseResponseInterceptor = client.interceptors.response.use(
	changeCaseResponseInterceptor.response,
	changeCaseResponseInterceptor.error,
);

// easily remove the interceptors
// axios.interceptors.request.eject(caseRequestInterceptor);

export default client;
