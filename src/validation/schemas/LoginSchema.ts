import { z } from "zod";
import { phoneRegex } from "../constants/regexPatterns";

export const LoginFormSchema = z.object({
	mobile: z
		.string()
		.trim()
		.min(1, "لطفا شماره موبایل خود را وارد کنید.")
		.regex(phoneRegex, "شماره‌ موبایل وارد شده معتبر نیست.")
		.length(11, "طول شماره موبایل باید ۱۱ رقم باشد.")
		.default(" "),
	password: z.string().min(1, "لطفا رمز عبور خود را وارد کنید."),
});

export type LoginFormSchema = z.infer<typeof LoginFormSchema>;
