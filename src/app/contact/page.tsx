import { IconMail } from "@tabler/icons-react";
import { Flex, Heading, Text } from "@yamada-ui/react";
import type { Metadata } from "next";
import HeroImage from "~/components/layout/HeroImage";
import Section from "~/components/layout/Section";

export const metadata: Metadata = {
	title: "お問い合わせ",
};

const heroImageData = {
	src: "/images/taking-notes-and-working-on-laptop.jpg",
	alt: "Data Dreamers",
	priority: true,
};

// const Subjects = [
// 	"学部",
// 	"全学部全学科",
// 	"学年",
// 	"学部1年生～4年生、修士1年生~2年生、博士課程",
// 	"応募資格",
// 	"特になし",
// ];

// const buttonAnimation = {
// 	initial: { scale: 1 },
// 	animate: { scale: 1.05 },
// };

export default function Home() {
	return (
		<Flex direction={"column"} align={"center"} justify={"space-between"}>
			<HeroImage {...heroImageData}>Contact</HeroImage>
			{/* <Section>
				<Heading as={"h2"} size={"lg"}>
					Data Dreamers では、
					<br />
					共に頑張る仲間を募集しています。
				</Heading>
			</Section>

			<Section parent={{ bgColor: "gray.50" }}>
				<Heading as={"h2"} size={"lg"} id="guidelines">
					募集要項
				</Heading>
				<Grid templateColumns={"1fr 2fr"} gap={4}>
					{Subjects.map((subject) => (
						<Text key={subject}>{subject}</Text>
					))}
				</Grid>
			</Section>

			<Section>
				<Heading as="h2" size={"lg"} id="schedule">
					活動の流れ
				</Heading>
				<Grid templateColumns="2fr 2fr 1fr" gap={4}>
					{FLOWS.map((flow) => (
						<Text key={flow}>{flow}</Text>
					))}
				</Grid>
				<Text color="gray.700">
					※活動場所については随時お知らせいたします。
				</Text>
				<Text color={"red.500"} fontWeight={"bold"}>
					仮加入申請を行ったうえで、全3回の研修すべてに出席した方のみが本加入となります。
					<br />
					本加入後はグループの希望アンケートを取り、グループ配属となります。
				</Text>
				<Text color="gray.700">
					授業などが重なっている場合、個別に対応させていただきます。
					<br />
					事前にその旨をお知らせください。
				</Text>
			</Section> */}

			<Section>
				<Heading as={"h2"} size={"lg"} id="contact-us">
					お問い合わせ
				</Heading>
				<Text>ご質問等がございましたら、お気軽にお問い合わせください。</Text>
				<Flex
					_hover={{ bgGradient: "light" }}
					direction={"column"}
					align={"center"}
					rounded={"md"}
					border={"solid 1px"}
					borderColor={"gray.500"}
					p="2"
					gap="2"
					as="a"
					href="mailto:yumekobo.ddp@gmail.com"
					target="_blank"
					rel="noreferrer"
				>
					<IconMail
						style={{
							width: "100px",
							height: "100px",
							color: "var(--ui-colors-gray-800)",
						}}
					/>
					<Text>G-Mail</Text>
				</Flex>
			</Section>

			{/* <Section>
				<Motion whileHover={"animate"} variants={buttonAnimation}>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSflxF76gRaBrgvqoWCrMN30Anx91Qsm8ISPDVREWwgaMcz8xQ/viewform"
						target="_blank"
						rel="noreferrer"
					>
						<Button
							h="20"
							size={"lg"}
							bgColor={"gray.50"}
							_hover={{ bgGradient: "light", transition: "ease" }}
							w="full"
							rightIcon={<IconArrowNarrowRight />}
						>
							お申し込みはこちら
						</Button>
					</a>
				</Motion>
			</Section> */}
		</Flex>
	);
}
