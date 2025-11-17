import { IconChevronRight } from "@tabler/icons-react";
import { Flex, Heading, Separator, Text } from "@yamada-ui/react";
import type { Metadata } from "next";
import type { ImageProps } from "next/image";
import Link from "next/link";
import { GhostButton } from "~/components/atoms/Button";
import DocsWell from "~/components/features/DocsWell";
import HeroImage from "~/components/layout/HeroImage";
import Section from "~/components/layout/Section";

export const metadata: Metadata = {
	title: "Data Dreamers",
	openGraph: {
		type: "website",
		url: "https://data-dreamers.vercel.app/about",
		title: "About | Data Dreamers",
		siteName: "Data Dreamers Official Website",
		images: [
			{
				url: "https://data-dreamers.vercel.app/images/challenge-lab-01.webp",
			},
		],
	},
};

const imageData: ImageProps = {
	src: "/images/challenge-lab-01.webp",
	alt: "Data Dreamers",
	priority: true,
	placeholder: "blur",
};

export default function Home() {
	return (
		<Flex direction={"column"} align={"center"} justify={"space-between"}>
			<HeroImage {...imageData}>
				昨日より良い明日を
				<br />
				&emsp;データサイエンスで。
			</HeroImage>
			<Section>
				<Flex direction={"column"} align={"center"} gap={"2rem"}>
					<div>
						<Heading size={"2xl"} textAlign={"center"}>
							Data Dreamers
						</Heading>
						{/* &amp; は & の実体参照 */}
						<Text textAlign={"center"} color={"gray.700"}>
							Data Science &amp; Analytics Community
						</Text>
					</div>
					<Separator py={2} />
					<Text textAlign={"center"}>
						Data Dreamersは、データサイエンティストを育成するプロジェクトです。
					</Text>
					<Text textAlign={"center"}>
						データ分析に興味のある人同士が交流し、切磋琢磨する場を提供します。
					</Text>
					<DocsWell />
				</Flex>
			</Section>
			<Section parent={{ bgColor: "gray.50" }}>
				<Heading size={"lg"}>活動内容</Heading>
				<Text>
					データサイエンスに関する勉強会やハンズオンイベントを開催し、データ分析技術の向上を図ります。
				</Text>
				<Text>
					また、実際のデータを用いたコンペティションに参加し、社会課題の解決に挑戦します。
				</Text>
			</Section>

			<Section>
				<Heading>新入生の方へ</Heading>
				<Text>
					新入生に向けたイベントを開催しています。データサイエンスに興味のある方はぜひご参加ください。
				</Text>
				<Flex justify={"end"}>
					<Link href={"/for-new-dreamers"}>
						<GhostButton rightIcon={<IconChevronRight />}>
							詳しくはこちら
						</GhostButton>
					</Link>
				</Flex>
			</Section>

			<Section parent={{ bgColor: "gray.50" }}>
				<Heading>お知らせ</Heading>
				<Text>最新の活動情報をお知らせします。</Text>
				<Flex justify={"end"}>
					<Link href={"/news"}>
						<GhostButton rightIcon={<IconChevronRight />}>
							詳しくはこちら
						</GhostButton>
					</Link>
				</Flex>
			</Section>

			<Section>
				<Heading>お問い合わせ</Heading>
				<Text>Data Dreamersへのお問い合わせはこちらからお願いします。</Text>
				<Flex justify={"end"}>
					<Link href={"/contact"}>
						<GhostButton rightIcon={<IconChevronRight />}>
							詳しくはこちら
						</GhostButton>
					</Link>
				</Flex>
			</Section>
		</Flex>
	);
}
