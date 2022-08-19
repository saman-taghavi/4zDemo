import "assets/styles/globals.scss";
import type { AppProps } from "next/app";

// i18next
import { appWithTranslation } from "next-i18next";

// layout settings
import { ReactElement, ReactNode, useState } from "react";
import type { NextPage } from "next";

// react query
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient as defaultQueryClient } from "utils/defaultQueryOptions";
// user context

// toast
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);
	const [queryClient] = useState(() => defaultQueryClient);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				{getLayout(<Component {...pageProps} />)}
				<ToastContainer
					position="bottom-left"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
					bodyClassName="font-Estedad text-sm"
					transition={Slide}
				/>
				<ReactQueryDevtools initialIsOpen={false} />
			</Hydrate>
		</QueryClientProvider>
	);
}

export default appWithTranslation(MyApp);
