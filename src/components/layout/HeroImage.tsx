import { Box, Text } from "@yamada-ui/react";
import Image, { type ImageProps } from "next/image";
import type { FC, ReactNode } from "react";

interface Props extends ImageProps {
	children?: ReactNode;
}

/**
 *
 * @param children React.ReactNode
 * @param rest ImageProps
 * @description Hero Image component with gradient overlay and text
 */
const HeroImage: FC<Props> = ({ children, ...rest }) => {
	return (
		<Box h={"64vw"} maxH={"calc(100vh - 300px)"} w={"100vw"} pos={"relative"}>
			<Box position={"absolute"} bgGradient={"blackAlpha"} w="full" h="full" />
			<Image {...rest} fill sizes="100vw" style={{ objectFit: "cover" }} />
			<Box
				position={"absolute"}
				bgColor={"banner"}
				bottom="10%"
				left={"-30"}
				color="white"
				py={{ base: "4", md: "2" }}
				px={{ base: "6", md: "4" }}
				fontWeight={"bold"}
				fontSize={{ base: "xl", md: "lg" }}
				transform={"skewX(30deg)"}
			>
				<Text transform={"skewX(-30deg)"} pl="30">
					{children}
				</Text>
			</Box>
		</Box>
	);
};

export default HeroImage;
