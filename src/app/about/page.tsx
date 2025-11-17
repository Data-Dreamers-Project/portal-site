import { Box, Flex, Grid, Heading, Text } from "@yamada-ui/react";
import type { Metadata } from "next";
import Image from "next/image";
import HeroImage from "~/components/layout/HeroImage";
import Section from "~/components/layout/Section";

const imageData = {
	src: "/images/challenge-lab-02.webp",
	alt: "Data Dreamers",
	priority: true,
};

export const metadata: Metadata = {
	title: "About",
	openGraph: {
		type: "website",
		url: "https://data-dreamers.vercel.app/about",
		title: "About | Data Dreamers",
		siteName: "Data Dreamers Official Website",
		images: [
			{
				url: "https://data-dreamers.vercel.app/images/challenge-lab-02.png",
			},
		],
	},
};

export default function Home() {
	return (
		<Flex direction={"column"} align={"center"} justify={"space-between"}>
			<HeroImage {...imageData}>ABOUT</HeroImage>
			{/* data-dreamers */}
			<Section>
				<Heading as={"h2"} size={"lg"} id="data-dreamers">
					Data Dreamers とは？
				</Heading>
				<Text lineHeight={8}>
					金沢工業大学の課外活動団体であり、夢考房に所属しています。
					<br />
					2023年5月 に発足した 新しいプロジェクトです。
					<br />
					正式名称は{" "}
					<strong>
						金沢工業大学 夢考房 データサイエンスプロジェクト Data Dreamers{" "}
					</strong>
					です。
					<br />
					私たちは、
					<strong>社会課題を解決できるデータサイエンティストの育成</strong>{" "}
					をテーマに活動しています。
				</Text>
			</Section>

			<Section parent={{ bgColor: "gray.50" }}>
				<Heading as={"h2"} size={"lg"} id="our-mission">
					私たちの使命
				</Heading>
				<Text>
					「社会課題を解決できるデータサイエンティストの育成」という目的を達成するために、2つのテーマを軸に活動を行っています。
				</Text>
				<Text>
					1. データ分析を扱う技術向上に機会を得られる場の構築
					<br />
					2. オープン・クローズドな実データを扱った社会課題の解決
				</Text>
			</Section>

			{/* 活動内容 */}
			<Section>
				<Heading as={"h2"} size={"lg"} id="activities">
					活動内容
				</Heading>
				<Flex direction={"column"} gap="md" py="md">
					<Heading as={"h3"} size={"md"}>
						コンペティションへの参加
					</Heading>
					<Flex pos={"relative"} w="full" height="300">
						<Image
							src="/images/competition.png"
							alt="competition"
							fill
							style={{ objectFit: "contain" }}
						/>
					</Flex>
					<Text pl="1em">
						グループに分かれて Signate・Kaggle
						などのコンペティションへ参加しています。
						{/* <br />
						詳細はグループでの活動内容をご覧ください。 */}
					</Text>
				</Flex>
				<Flex direction={"column"} gap="md" py="md">
					<Heading as={"h3"} size={"md"}>
						育成プログラムへの参加
					</Heading>
					<Flex pos={"relative"} w="full" height="300">
						<Image
							src="/images/manabi-dx.png"
							alt="manabi-dx"
							fill
							style={{ objectFit: "contain" }}
						/>
					</Flex>
					<Text pl="1em">
						経済産業省主催のデジタル推進人材育成プログラムであるマナビDXクエストや前学期・後学期に開催されている東京大学松尾研が開催しているGCIにプロジェクト全体で参加しています。
					</Text>
				</Flex>
				<Flex direction={"column"} gap="md" py="md">
					<Heading as={"h3"} size={"md"}>
						ハッカソンなどの外部イベントへの参加
					</Heading>
					<Flex pos={"relative"} w="full" height="300">
						<Image
							src="/images/azure-openai-hackathon.jpg"
							alt="azure-openai-hackathon"
							fill
							style={{ objectFit: "contain" }}
						/>
					</Flex>
					<Text pl="1em">
						不定期に開催されるハッカソンなどについては、グループの垣根を越えて参加しています。
					</Text>
				</Flex>
			</Section>

			{/* 日々の活動 */}
			<Section parent={{ bgColor: "gray.50" }}>
				<Heading as={"h2"} size={"lg"} id="daily-activity">
					日々の活動
				</Heading>
				<Grid templateColumns={"1fr"}>
					<Heading as={"h3"} size={"sm"}>
						活動時間
					</Heading>
					<Box p="1em">
						<Text>コアタイム: 毎週月曜日 17:00 ~ 19:00</Text>
						<Text fontSize={"smaller"} color={"gray.600"}>
							※コアタイムは対面で集まって活動する時間です。コアタイム以外でも活動を行うチームがあります。
						</Text>
					</Box>
				</Grid>
				<Grid templateColumns={"1fr"}>
					<Heading as={"h3"} size={"sm"}>
						活動場所
					</Heading>
					<Text p="1em">
						夢考房2F Data Dreamers フロア
						<br />
						その他、教室を借りて行います。
						<br />
						※活動場所はDiscordでお知らせしています。
						見学・参加希望の方は、事前にメールでお知らせください。
						<br />
					</Text>
				</Grid>
			</Section>
		</Flex>
	);
}
