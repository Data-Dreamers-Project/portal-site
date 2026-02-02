"use client";

import { IconMenu2 } from "@tabler/icons-react";
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	Flex,
	IconButton,
	Motion,
	Text,
	useDisclosure,
} from "@yamada-ui/react";
import Link from "next/link";

const List = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "New Students",
		href: "/for-new-dreamers",
	},
	{
		title: "News",
		href: "/news",
	},
	// {
	// 	title: "Blog",
	// 	href: "/blog",
	// },
	{
		title: "Contact",
		href: "/contact",
	},
];

const SideMenu = () => {
	const { open, onOpen, onClose } = useDisclosure();
	const underlineAnimation = {
		initial: { width: "0%" },
		animate: { width: "100%" },
	};
	return (
		<>
			<IconButton
				icon={<IconMenu2 size={24} />}
				variant={"outline"}
				onClick={onOpen}
				color={"white"}
				_hover={{ bg: "blackAlpha.500" }}
			/>

			<Drawer
				open={open}
				onClose={onClose}
				size={"sm"}
				bgGradient={"blue"}
				color="white"
			>
				<DrawerHeader>Data Dreamers</DrawerHeader>
				<DrawerBody>
					<Flex direction="column" gap={6} mt={6} w={"sm"}>
						{List.map((item) => (
							<Motion initial="initial" whileHover="animate" key={item.title}>
								<Link href={item.href} onClick={onClose}>
									<Text
										fontSize={"lg"}
										color={"white"}
										_hover={{ bgGradient: "white", bgClip: "text" }}
									>
										{item.title}
									</Text>
									<Motion
										bgGradient="white"
										h="1px"
										variants={underlineAnimation}
									/>
								</Link>
							</Motion>
						))}
					</Flex>
				</DrawerBody>
			</Drawer>
		</>
	);
};

export default SideMenu;
