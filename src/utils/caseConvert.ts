type caseType = "camel" | "pascal" | "snake" | "domain" | "kebab";
// object type
export type basicObj = { [key: string]: any };

export const changeCase = (text: string, type: caseType) => {
	const seperators = {
		camel: "",
		pascal: "",
		snake: "_",
		domain: ".",
		kebab: "-",
	};

	if (Object.keys(seperators).indexOf(type) == -1) {
		throw new TypeError("Type must either be `camel`, `pascal`, `snake`, `domain` or `kebab`");
	}

	const parts = text.split(/(?=[A-Z])|_|-| |\./).map((key, idx) => {
		switch (type) {
			case "camel":
				if (idx == 0) {
					return key.toLowerCase();
				}
			// falls through
			case "pascal":
				return key.charAt(0).toUpperCase() + key.substring(1).toLowerCase();
			case "domain":
			// falls through
			case "kebab":
			// falls through
			case "snake":
				return key.toLowerCase();
			default:
				return key;
		}
	});

	return parts.join(seperators[type]);
};

export const changeObjCase = (obj: basicObj, caseType: caseType) => {
	const allCaseTypes = ["camel", "pascal", "snake", "domain", "kebab"];
	if (allCaseTypes.includes(caseType)) {
		const newObj: basicObj = {};
		for (const key in obj) {
			newObj[changeCase(key, caseType)] = obj[key];
		}
		return newObj;
	}
	return obj;
};
