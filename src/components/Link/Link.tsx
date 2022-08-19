import Link from "next/link";
import { LinkProps } from "./Link.types";

const LinkComponent = (props: LinkProps) => {
	return (
		<Link href={props.href} passHref>
			<a className={props.className}>{props.linkText}</a>
		</Link>
	);
};

export default LinkComponent;
