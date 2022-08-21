import { LayoutProps } from "./Layout.types";
import Head from "../Head";
import Header from "./Header";

const Layout = ({ children, title, linkData, metaData }: LayoutProps) => {
	return (
		<>
			<Head title={title} linkData={linkData} metaData={metaData} />
			<div dir="rtl" className="flex p-5">
				<main className="min-h-screen grow rounded-sm   p-5">
					<Header />
					{children}
				</main>
			</div>
		</>
	);
};

export default Layout;
