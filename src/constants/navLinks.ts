export const NAV_LINKS = [
	{ title: "About", href: "/about" },
	{ title: "New Students", href: "/for-new-dreamers" },
	{ title: "News", href: "/news" },
	{ title: "Contact", href: "/contact" },
] as const;

// SideMenu用 (Home を含む)
export const SIDE_MENU_LINKS = [
	{ title: "Home", href: "/" },
	...NAV_LINKS,
] as const;
