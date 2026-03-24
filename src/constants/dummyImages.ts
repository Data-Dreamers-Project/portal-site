export const DUMMY_IMAGES = [
	"/images/business-cat-in-office.jpg",
	"/images/business-pug-working-on-laptop.jpg",
	"/images/hard-cover-books-on-blue-background.jpg",
	"/images/hands-typing.jpg",
	"/images/taking-notes-and-working-on-laptop.jpg",
	"/images/writing-stationery.jpg",
];

/**
 * IDを元に決定論的にダミー画像URLを返す
 */
export const DummyImageById = (id: string): string => {
	let hash = 0;
	for (let i = 0; i < id.length; i++) {
		hash = (hash * 31 + id.charCodeAt(i)) & 0xffffffff;
	}
	return DUMMY_IMAGES[Math.abs(hash) % DUMMY_IMAGES.length];
};

/**
 *
 * @returns Dummy Image URL
 */
export const RandomDummyImage = (): string => {
	const random = Math.floor(Math.random() * DUMMY_IMAGES.length);
	return DUMMY_IMAGES[random];
};
