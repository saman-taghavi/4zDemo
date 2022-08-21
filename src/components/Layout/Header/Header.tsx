import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Logo from "@/assets/img/Logo.jpg";
import { useTranslation } from "next-i18next";
import NavList from "../NavList";
export default function Header() {
	const { t } = useTranslation();
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	return (
		<Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
			<div className="container mx-auto flex items-center md:justify-between  text-blue-gray-900">
				<Typography
					as="a"
					href="#"
					variant="small"
					className="mr-4 cursor-pointer py-1.5 font-black text-xl font-Estedad flex items-center justify-between">
					<span>{t("4zelei")}</span>
				</Typography>
				<div className="flex justify-around items-center ">
					<div className="hidden lg:block px-10">
						<NavList />
					</div>
					<Button variant="gradient" size="sm" className="hidden lg:inline-block">
						<span>login / signup</span>
					</Button>
				</div>
				<IconButton
					variant="text"
					className="mr-auto my-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
