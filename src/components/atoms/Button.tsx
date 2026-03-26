import { Button, type ButtonProps, Motion } from "@yamada-ui/react";
import type { FC } from "react";

export const OutlineButton: FC<ButtonProps> = ({ children, ...rest }) => {
	const topKey = {
		initial: { width: "1.5rem", left: "0.6rem" },
		animate: { width: "0px", left: "0" },
	};

	const bottomKey1 = {
		initial: { width: "0.9rem", right: "0.8rem" },
		animate: { width: "0px", right: "0" },
	};

	const bottomKey2 = {
		initial: { width: "0.4rem", right: "0.1rem" },
		animate: { width: "0px", right: "0" },
	};

	return (
		<Button
			variant={"outline"}
			borderColor={"black"}
			color={"black"}
			bgColor={"white"}
			borderRadius={"0"}
			overflow={"visible"}
			position={"relative"}
			_hover={{ bgColor: "black", color: "white", transition: "ease" }}
			{...rest}
		>
			<Motion initial="initial" whileHover={"animate"}>
				<Motion
					variants={topKey}
					h="2px"
					top={"-2px"}
					position="absolute"
					bgColor={"white"}
				/>
				{children}
				<Motion
					variants={bottomKey1}
					h="2px"
					bottom={"-2px"}
					position="absolute"
					bgColor={"white"}
				/>
				<Motion
					variants={bottomKey2}
					h="2px"
					bottom={"-2px"}
					position="absolute"
					bgColor={"white"}
				/>
			</Motion>
		</Button>
	);
};

export const SolidButton: FC<ButtonProps> = ({ children, ...rest }) => {
	return (
		<Button
			bgGradient={"white"}
			_hover={{ bgGradient: "whiteHover", transition: "ease" }}
			{...rest}
		>
			{children}
		</Button>
	);
};

export const GhostButton: FC<ButtonProps> = ({ children, ...rest }) => {
	const underlineAnimation = {
		initial: { width: "0%" },
		animate: { width: "100%" },
	};

	return (
		<Motion
			initial={"initial"}
			as={"div"}
			whileHover={"animate"}
			fontWeight={"bold"}
			fontSize={"xl"}
		>
			<Button
				variant={"ghost"}
				size={"lg"}
				_hover={{}} // NOTE: デフォルトのhoverの設定を削除
				{...rest}
			>
				{children}
			</Button>
			<Motion bgGradient="blue" h="2px" variants={underlineAnimation} />
		</Motion>
	);
};
