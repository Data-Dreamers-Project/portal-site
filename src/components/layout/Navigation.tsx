import { Flex, Motion, Text } from "@yamada-ui/react";
import Link from "next/link";
import { NAV_LINKS } from "~/constants/navLinks";
import SideMenu from "./SideMenu";

type Props = {
	direction?: "row" | "column";
};

const Navigation = ({ direction }: Props) => {
	const underlineAnimation = {
		initial: { width: "0%" },
		animate: { width: "100%" },
	};

	return (
		<>
			<Flex
				gapX={6}
				mr={6}
				display={{ base: "flex", md: "none" }}
				direction={direction}
			>
				{NAV_LINKS.map((item) => (
					<Motion initial="initial" whileHover="animate" key={item.title}>
						<Link href={item.href}>
							<Text
								fontSize={"lg"}
								color={"white"}
								_hover={{ bgGradient: "whiteHover", bgClip: "text" }}
							>
								{item.title}
							</Text>
							<Motion
								bgGradient="whiteHover"
								h="1px"
								variants={underlineAnimation}
							/>
						</Link>
					</Motion>
				))}
			</Flex>
			<Flex display={{ base: "none", md: "flex" }}>
				<SideMenu />
			</Flex>
		</>
	);
};

export default Navigation;
