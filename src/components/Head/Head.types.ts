interface MetaData {
	charset?: string;
	name?: string;
	content?: string;
	hid?: string;
	key?: string;
}

interface LinkData {
	rel?: string;
	type?: string;
	href?: string;
	src?: string;
	async?: boolean;
	body?: boolean;
}

export interface HeadProps {
	title?: string;
	metaData?: MetaData | MetaData[];
	linkData?: LinkData | LinkData[];
}
