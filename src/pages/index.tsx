import type { NextPageWithLayout } from "./_app";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import confetti from "@/assets/img/confetti.jpg";
import Logo from "@/assets/img/Logo.png";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<div dir="rtl" className="flex h-screen w-screen flex-col items-center justify-center bg-4zp">
				{/* <Image src={confetti} layout="fill" objectFit="cover" /> */}
				<div className="mr-12">
					<Image alt="4zLogo" src={Logo} objectFit="contain" width={"160"} height={"200"} />
				</div>
				<div className="mx-auto flex flex-col items-center justify-center">داریم میایم ...</div>
			</div>
		</>
	);
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
