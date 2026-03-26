import type { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export interface Category extends MicroCMSDate {
	id: string;
	name: string;
}

export interface Blog {
	contents: Content[];
	totalCount: number;
	offset: number;
	limit: number;
}

export interface Content extends MicroCMSDate {
	id: string;
	title: string;
	content: string;
	eyecatch?: MicroCMSImage;
	categories: Category[];
}
