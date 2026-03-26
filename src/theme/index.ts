"use client";

import { extendConfig, extendTheme, type UsageTheme } from "@yamada-ui/react";
// import styles from './styles'
// import components from './components'
import tokens from "./tokens";

const customTheme: UsageTheme = {
	// styles,
	// components,
	...tokens,
};

export const theme = extendTheme(customTheme)();

export const config = extendConfig({
	initialColorMode: "dark",
});
