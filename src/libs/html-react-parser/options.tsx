import {
	Box,
	DecimalList,
	DiscList,
	Heading,
	ListItem,
	NativeTable,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Tr,
} from "@yamada-ui/react";
import hljs from "highlight.js";
import Image from "next/image";
import "highlight.js/styles/atom-one-dark.css";
import parse, {
	type DOMNode,
	domToReact,
	Element,
	type HTMLReactParserOptions,
} from "html-react-parser";

type ReplaceElementProps = {
	children?: React.ReactNode;
	// biome-ignore lint/suspicious/noExplicitAny: Parsed HTML attributes are dynamic and cannot be strongly typed here.
	[key: string]: any;
};

type CSSProperties = {
	[key in keyof React.CSSProperties]?: string;
};

// スタイル文字列をオブジェクトに変換する関数
const parseStyle = (styleString: string): CSSProperties => {
	return styleString.split(";").reduce<CSSProperties>((acc, style) => {
		const [property, value] = style.split(":");
		if (property && value) {
			acc[property.trim() as keyof CSSProperties] = value.trim();
		}
		return acc;
	}, {} as CSSProperties);
};

const replaceElements: Record<
	string,
	React.ComponentType<ReplaceElementProps>
> = {
	h1: ({ children, style, ...props }) => (
		<Heading as="h1" {...props}>
			{children}
		</Heading>
	),
	h2: ({ children, style, ...props }) => (
		<Heading as="h2" {...props}>
			{children}
		</Heading>
	),
	code: ({ children, style, ...props }) => {
		// Propsが空かどうか
		if (Reflect.ownKeys(props).length === 0) {
			return (
				<Text as={"code"} bg={"gray.50"} p={1} borderRadius={"sm"} {...props}>
					{children}
				</Text>
			);
		}

		return (
			<code className="hljs" {...props}>
				{parse(hljs.highlightAuto(children?.toString() ?? "").value)}
			</code>
		);
	},
	p: ({ children, style, ...props }) => (
		<Text style={style} {...props}>
			{children}
		</Text>
	),
	ul: ({ children, style, ...props }) => (
		<DiscList style={style} {...props}>
			{children}
		</DiscList>
	),
	ol: ({ children, style, ...props }) => (
		<DecimalList style={style} {...props}>
			{children}
		</DecimalList>
	),
	li: ({ children, style, ...props }) => (
		<ListItem style={style} {...props}>
			{children}
		</ListItem>
	),
	table: ({ children, style, ...props }) => (
		<TableContainer>
			<NativeTable style={style} {...props}>
				{children}
			</NativeTable>
		</TableContainer>
	),
	tbody: ({ children, style, ...props }) => (
		<Tbody style={style} {...props}>
			{children}
		</Tbody>
	),
	tr: ({ children, style, ...props }) => (
		<Tr style={style} {...props}>
			{children}
		</Tr>
	),
	th: ({ children, style, ...props }) => (
		<Th bg={"gray.50"} style={style} {...props}>
			{children}
		</Th>
	),
	td: ({ children, style, ...props }) => (
		<Td style={style} {...props}>
			{children}
		</Td>
	),
	b: ({ children, style, ...props }) => (
		<Text as={"b"} style={style} {...props}>
			{children}
		</Text>
	),
	i: ({ children, style, ...props }) => (
		<Text as={"i"} style={style} {...props}>
			{children}
		</Text>
	),
	s: ({ children, style, ...props }) => (
		<Text as={"s"} style={style} {...props}>
			{children}
		</Text>
	),
	blockquote: ({ children, style, ...props }) => (
		<blockquote style={style} {...props}>
			<Box
				bg={"gray.50"}
				p={3}
				borderLeft={4}
				borderLeftColor={"black"}
				borderLeftStyle={"solid"}
			>
				{children}
			</Box>
		</blockquote>
	),
	img: ({ children, src, alt, ...props }) => {
		return (
			<Image
				src={src}
				alt={alt}
				layout="intrinsic" // アスペクト比を自動計算
				{...props}
			/>
		);
	},
};

export const options: HTMLReactParserOptions = {
	replace: (domNode) => {
		if (domNode instanceof Element && domNode.tagName in replaceElements) {
			const ComponentToRender = replaceElements[domNode.tagName];
			const { style, ...otherAttribs } = domNode.attribs;

			// style属性が存在する場合、オブジェクトに変換
			const styleObj = style ? parseStyle(style) : undefined;
			return (
				<ComponentToRender style={styleObj} {...otherAttribs}>
					{domToReact(domNode.children as DOMNode[], options)}
				</ComponentToRender>
			);
		}
	},
};
