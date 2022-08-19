import { LayoutProps } from "./Layout.types";
import Head from "../Head";

const Layout = ({ children, title, linkData, metaData }: LayoutProps) => {
	return (
		<>
			<Head title={title} linkData={linkData} metaData={metaData} />
			<div dir="rtl" className="flex p-5">
				<main className="min-h-screen grow rounded-sm   p-5">
					{/* TODO a sticky header */}
					{children}
				</main>
			</div>
		</>
	);
};

export default Layout;
