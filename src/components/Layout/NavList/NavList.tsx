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
			className="text-balck flex transform  cursor-pointer  items-center transition-transform ease-linear  before:absolute before:bottom-full before:left-1/4  before:mb-2  before:h-1  before:w-1/2	  before:scale-x-0 before:rounded-full before:bg-4zp  before:duration-300
		 hover:relative hover:bg-transparent hover:text-4zp   before:hover:scale-x-100 before:active:scale-x-100
		">
			{title}
		</a>
	);
};

export default function NavList() {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const handleMenuClick = () => setIsOpen(!isOpen);
	const handleMenuKeyDown = (e: KeyboardEvent) => {
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
						className="text-balck  transform  cursor-pointer transition-transform ease-linear  before:absolute before:bottom-full before:left-1/4  before:mb-2  before:h-1  before:w-1/2	  before:scale-x-0 before:rounded-full before:bg-4zp  before:duration-300
						 hover:relative hover:bg-transparent hover:text-4zp   before:hover:scale-x-50 before:active:scale-x-50
						">
						<div className="flex items-center justify-between ">
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
