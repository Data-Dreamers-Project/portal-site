import { createClient } from "microcms-js-sdk";

if (
	!process.env.MICROCMS_BLOG_SERVICE_DOMAIN ||
	!process.env.MICROCMS_BLOG_API_KEY
) {
	throw new Error(
		"microCMS の環境変数が設定されていません。MICROCMS_BLOG_SERVICE_DOMAIN と MICROCMS_BLOG_API_KEY を に設定してください。",
	);
}

export const client = createClient({
	serviceDomain: process.env.MICROCMS_BLOG_SERVICE_DOMAIN,
	apiKey: process.env.MICROCMS_BLOG_API_KEY,
});
