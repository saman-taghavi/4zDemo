import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { changeObjCase } from "utils/caseConvert";
import { toast } from "react-toastify";

export const changeCaseRequestInterceptor = {
	config: (config: AxiosRequestConfig) => {
		// Do something before request is sent
		// convert to snake case if sending json
		if (config.data && config.headers?.["content-type"] === "application/json") {
			config.data = changeObjCase(config.data, "snake");
		}
		// convert params to snake case
		if (config.params) {
			config.params = changeObjCase(config.params, "snake");
		}
		return config;
	},
	error: (error: AxiosError) => {
		// Do something with request error
		return Promise.reject(error);
	},
};

export const changeCaseResponseInterceptor = {
	response: (response: AxiosResponse) => {
		// // Do something with response data
		// const customResponse = changeObjCase(response.data, "camel") as baseResponse;
		// if (customResponse.data && !Array.isArray(customResponse.data)) {
		// 	// check if it is not an array then it is an object , so change the case of top level object
		// 	customResponse.data = changeObjCase(customResponse.data, "camel");
		// }
		// return customResponse;
		return response;
	},
	error: (error: AxiosError) => {
		// Do something with response error
		// const customError = error?.response?.data
		// 	? (changeObjCase(error.response.data as baseError, "camel") as baseError)
		// 	: null;
		//                 // TODO: Handle Custom Error Messages...

		// if (customError) {
		// 	toast.error(customError.message);
		// 	return Promise.reject(customError);
		// }
		return Promise.reject(error);
	},
};
