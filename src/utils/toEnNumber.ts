export const toEnNumber = (str: string) => {
	return str
		.replace(/[\u0660-\u0669]/g, function (c: string): string {
			return (c.charCodeAt(0) - 0x0660).toString();
		})
		.replace(/[\u06f0-\u06f9]/g, (c: string): string => {
			return (c.charCodeAt(0) - 0x06f0).toString();
		});
};
