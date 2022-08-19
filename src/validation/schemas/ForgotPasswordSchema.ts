import { z } from "zod";
import { phoneRegex } from "../constants/regexPatterns";

export const PhoneNumber = z.object({
	phoneNumber: z
		.string()
		.trim()
		.min(1, "لطفا شماره موبایل خود را وارد کنید.")
		.regex(phoneRegex, "شماره‌ موبایل وارد شده معتبر نیست.")
		.length(11, "طول شماره موبایل باید ۱۱ رقم باشد.")
		.default(" "),
});
