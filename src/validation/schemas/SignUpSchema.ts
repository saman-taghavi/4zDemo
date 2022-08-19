import { z } from "zod";
import { phoneRegex as phoneRegExp } from "../constants";

export const SignUpFormSchema = z.object({
	email: z
		.string()
		.trim()
		.min(1, "لطفا ایمیل خود را وارد کنید.")
		.email("ایمیل وارد شده معتبر نیست."),
	phoneNumber: z
		.string()
		.trim()
		.min(1, "لطفا شماره موبایل خود را وارد کنید.")
		.regex(phoneRegExp, "شماره‌ موبایل وارد شده معتبر نیست.")
		.length(11, "طول شماره موبایل باید ۱۱ رقم باشد.")
		.default(" "),
	password: z.string().min(8, "طول رمز عبور باید حداقل ۸ کاراکتر باشد."),
	terms: z.literal(true),
});
