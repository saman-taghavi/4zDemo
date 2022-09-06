import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Activity, Icon } from "iconsax-react";
interface ScardProps {
	Icon: Icon;
	title: string;
	text: string;
}
export const Scard = (props: ScardProps) => {
	const iconStyles = ["Broken", "Bold", "Bulk", "Outline", "Linear"];
	const randomStyle = iconStyles[Math.floor(Math.random() * iconStyles.length)] as
		| "Broken"
		| "Bold"
		| "Bulk"
		| "Outline"
		| "Linear"
		| "TwoTone";
	return (
		<Card className="w-60 font-Estedad">
			<CardHeader className=" bg-transparent flex justify-center shadow-none">
				<props.Icon size={64} variant={randomStyle} className="text-teal-300" />
			</CardHeader>
			<CardBody className="text-center">
				<Typography className="mb-2 font-bold">{props.title}</Typography>
				<Typography className="mb-2 font-medium  text-gray-500">{props.text}</Typography>
			</CardBody>
		</Card>
	);
};
