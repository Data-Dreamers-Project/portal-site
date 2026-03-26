import { Container, Flex, type FlexProps } from "@yamada-ui/react";
import type React from "react";
import type { FC } from "react";

type Props = {
	parent?: FlexProps;
	children: React.ReactNode;
};

/**
 *
 * @param parent FlexProps
 * @param children React.ReactNode
 * @description Max width of 4xl and padding of 4rem 2rem
 */
const Section: FC<Props> = ({ parent, children }) => {
	return (
		<Flex w={"full"} justify={"center"} {...parent}>
			<Container maxW="4xl" p="4rem 2rem">
				{children}
			</Container>
		</Flex>
	);
};

export default Section;
