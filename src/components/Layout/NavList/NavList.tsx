import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import { useTranslation } from "next-i18next";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

const NavSingleItem = ({ title }: { title: string }) => {
	return (
		<a
			href="#"
			className="flex items-center hover:relative  before:absolute  before:h-1 before:bottom-full before:duration-300  before:mb-2 before:scale-x-0 before:hover:scale-x-100  transition-transform  ease-linear  transform	  before:w-1/2 before:left-1/4 before:rounded-full  before:bg-4zp
		 hover:bg-transparent text-balck hover:text-4zp   before:active:scale-x-100 cursor-pointer
		">
			{title}
		</a>
	);
};

export default function NavList() {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const handleMenuClick = () => setIsOpen(!isOpen);
	const handleMenuKeyDown = (e) => {
		if (e.key === "Enter") {
			setIsOpen(false);
		}
	};
	const ArrowIcon = isOpen ? (
		<ArrowDown2 size="16" rotate="180" color="#f97316" />
	) : (
		<ArrowUp2 size="16" rotate="180" color="#f97316" />
	);
	return (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Menu>
				<MenuHandler onClick={handleMenuClick}>
					<a
						className="hover:relative  before:absolute  before:h-1 before:bottom-full before:duration-300  before:mb-2 before:scale-x-0 before:hover:scale-x-50  transition-transform  ease-linear  transform	  before:w-1/2 before:left-1/4 before:rounded-full  before:bg-4zp
						 hover:bg-transparent text-balck hover:text-4zp   before:active:scale-x-50 cursor-pointer
						">
						<div className="flex justify-between items-center ">
							<div className={`mx-2 ${isOpen ? "text-4zp" : ""}`}>clickable Menu</div>
							<Transition
								show={true}
								enter="transition-opacity"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="transition-opacity "
								leaveFrom="opacity-100"
								leaveTo="opacity-0">
								{ArrowIcon}
							</Transition>
						</div>
					</a>
				</MenuHandler>
				<MenuList>
					<MenuItem>Menu Item 1</MenuItem>
					<MenuItem>Menu Item 2</MenuItem>
					<MenuItem>Menu Item 3</MenuItem>
				</MenuList>
			</Menu>
			<Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
				<NavSingleItem title="our blog" />
			</Typography>
			<Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
				<NavSingleItem title="about us" />
			</Typography>
			<Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
				<NavSingleItem title="something else" />
			</Typography>
		</ul>
	);
}
