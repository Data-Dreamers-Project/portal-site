import { Flex } from "@yamada-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Data Dreamers",
		default: "Data Dreamers",
	},
	description:
		"金沢工業大学 夢考房データサイエンスプロジェクト Data Dreamers の公式ホームページです。",
	openGraph: {
		type: "website",
		url: "https://data-dreamers.vercel.app",
		title: "Data Dreamers",
		description:
			"金沢工業大学 夢考房データサイエンスプロジェクト Data Dreamers の公式ホームページです。",
		siteName: "Data Dreamers Official Website",
		images: [
			{
				url: "https://data-dreamers.vercel.app/images/challenge-lab-01.png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				<Providers>
					<Flex
						direction={"column"}
						justify={"center"}
						minHeight={"100vh"}
						w={"full"}
					>
						<Header />
						<Flex
							as="main"
							direction="column"
							align="center"
							justify={"space-between"}
							grow={1}
							gap={4}
						>
							{children}
						</Flex>
						<Footer />
					</Flex>
				</Providers>
			</body>
		</html>
	);
}
