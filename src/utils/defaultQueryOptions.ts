// react query
import { QueryClient } from "@tanstack/react-query";
// Define a default query function that will receive the query key
// provide the default query function to your app with defaultOptions
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			cacheTime: 1000 * 60 * 3,
		},
	},
});
