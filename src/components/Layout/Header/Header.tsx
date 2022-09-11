import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Logo from "@/assets/img/Logo.png";
import { useTranslation } from "next-i18next";
import NavList from "../NavList";
export default function Header() {
	const { t } = useTranslation();
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	return (
		<Navbar className="sticky top-0 z-50 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
			<div className="container mx-auto flex items-center text-blue-gray-900  md:justify-between">
				<Typography
					as="a"
					href="#"
					variant="small"
					className="mr-4 flex cursor-pointer items-center justify-between py-1.5 font-Estedad text-xl font-black">
					<span>{t("4zelei")}</span>
				</Typography>
				<div className="flex items-center justify-around ">
					<div className="hidden px-10 lg:block">
						<NavList />
					</div>
					<Button variant="gradient" size="sm" className="hidden lg:inline-block">
						<span>login / signup</span>
					</Button>
				</div>
				<IconButton
					variant="text"
					className="my-auto mr-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}>
					{openNav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					)}
				</IconButton>
			</div>
			<MobileNav open={openNav}>
				<NavList />
				<Button variant="gradient" size="sm" fullWidth className="mb-2">
					<span>Buy Now</span>
				</Button>
			</MobileNav>
		</Navbar>
	);
}
