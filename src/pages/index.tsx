import type { NextPageWithLayout } from "./_app";
import Layout from "components/Layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from "@material-tailwind/react";
import { Cswiper } from "@/components/Carousel";
import { Scard } from "@/components/Card";
import { Activity, Airdrop, Airplane, Airpod, Airpods } from "iconsax-react";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center  mt-5">
				<div className="pb-96">
					<Cswiper />
				</div>
				<div id="why" className="  self-start font-Estedad">
					<p className="font-black text-4xl "> چرا چهارضلعی را انتخاب کنیم؟</p>
					<div className="grid grid-cols-5 gap-7 gap-y-10 pt-20">
						<Scard
							Icon={Airdrop}
							title="آنالیز کسب و کار"
							text="ارائه بهترین نمودارها جهت بررسی و تحلیل فعالیت‌ شما و ارائه مشاوره‌های موثر مالی"
						/>
						<Scard
							Icon={Airplane}
							title="آنالیز کسب و کار"
							text="ارائه بهترین نمودارها جهت بررسی و تحلیل فعالیت‌ شما و ارائه مشاوره‌های موثر مالی"
						/>
						<Scard
							Icon={Airpods}
							title="آنالیز کسب و کار"
							text="ارائه بهترین نمودارها جهت بررسی و تحلیل فعالیت‌ شما و ارائه مشاوره‌های موثر مالی"
						/>
						<Scard
							Icon={Airpod}
							title="آنالیز کسب و کار"
							text="ارائه بهترین نمودارها جهت بررسی و تحلیل فعالیت‌ شما و ارائه مشاوره‌های موثر مالی"
						/>
						<Scard
							Icon={Activity}
							title="آنالیز کسب و کار"
							text="ارائه بهترین نمودارها جهت بررسی و تحلیل فعالیت‌ شما و ارائه مشاوره‌های موثر مالی"
						/>
					</div>
				</div>
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
