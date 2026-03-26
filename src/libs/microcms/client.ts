import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: process.env.MICROCMS_BLOG_SERVICE_DOMAIN as string,
	apiKey: process.env.MICROCMS_BLOG_API_KEY as string,
});
