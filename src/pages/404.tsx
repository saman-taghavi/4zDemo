import type { NextPage } from "next";

import { useRouter } from "next/router";
import { useEffect, Fragment } from "react";
const NotFound: NextPage = () => {
	const router = useRouter();
	useEffect(() => {
		if (router && router.query) {
			router.push("/");
		}
	}, [router]);
	return <Fragment>Not gonna render</Fragment>;
};

export default NotFound;
