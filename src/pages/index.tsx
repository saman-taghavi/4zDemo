import type { NextPageWithLayout } from "./_app";
import Layout from "components/Layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from "@material-tailwind/react";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<div className="flex items-center justify-center bg-blue-gray-600">
				{/* <Button>click me bro</Button> */}
			</div>
		</>
	);
};

Home.getLayout = function getLayout(page: React.ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			// Will be passed to the page component as props
		},
	};
}
