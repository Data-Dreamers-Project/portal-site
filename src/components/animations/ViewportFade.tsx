"use client";

import { Box, Motion } from "@yamada-ui/react";
import React from "react";

interface Props {
	children: React.ReactNode;
}

export const ViewportFade = ({ children }: Props) => {
	const rootRef = React.useRef(null);
	return (
		<Box ref={rootRef}>
			<Motion
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ root: rootRef }}
				// transition={{ duration: 0.5 }}
			>
				{children}
			</Motion>
		</Box>
	);
};
