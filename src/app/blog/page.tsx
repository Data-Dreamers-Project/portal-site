import {
	Box,
	Card,
	CardBody,
	CardHeader,
	HStack,
	Heading,
	Loading,
	SimpleGrid,
	Spacer,
	Tag,
	Text,
	VStack,
} from "@yamada-ui/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategorySelector } from "~/components/features/CategorySelector";
import { SearchInput } from "~/components/features/SearchInput";
import Section from "~/components/layout/Section";
import { RandomDummyImage } from "~/constants/dummyImages";
import { client } from "~/libs/microcms/client";
import type { Blog, Category } from "~/types/blog";

export const revalidate = 300;

interface BlogListPageProps {
	searchParams: {
		q?: string;
		category?: string;
	};
}

const BlogListPage = async ({ searchParams }: BlogListPageProps) => {
	return notFound();
	// ブログの運用が始まるまで一旦notFound
	const searchWord = searchParams.q || ""; // URLクエリから検索ワードを取得
	const selectedCategory = searchParams.category || ""; // URLクエリからカテゴリを取得

	// microCMS APIにクエリパラメータを直接送信
	const data = await client.get<Blog>({
		endpoint: "blogs",
		queries: {
			filters: [
				searchWord ? `title[contains]${searchWord}` : undefined,
				// selectedCategory ? `categories[equals]${selectedCategory}` : undefined,
				selectedCategory
					? `categories[contains]${selectedCategory}`
					: undefined,
			]
				.filter(Boolean)
				.join("[and]"),
		},
	});

	// カテゴリのデータ取得
	const categoriesData = await client.getList<Category>({
		endpoint: "categories",
	});

	if (!data || !categoriesData) {
		return <Loading variant="circles" />;
	}

	return (
		<VStack>
			<HStack margin="1rem">
				<Spacer display={{ base: "block", md: "none" }} />
				<HStack flexDirection={{ base: "row", md: "column" }}>
					<Spacer />
					<CategorySelector
						categories={categoriesData.contents}
						selectedCategory={selectedCategory}
					/>
					<SearchInput />
				</HStack>
			</HStack>
			<Section>
				<Heading as="h1" size="2xl">
					記事一覧
				</Heading>
				<SimpleGrid w="full" columns={{ base: 3, sm: 1 }} gap={4}>
					{data.contents.map((blog) => (
						<Link href={`blog/${blog.id}`} key={blog.id}>
							<Card>
								<Box
									position="relative"
									width="100%"
									height="150px"
									bgGradient={"white"}
								>
									<Image
										src={blog.eyecatch?.url ?? RandomDummyImage()}
										alt={blog.title}
										fill
										style={{ objectFit: "contain" }}
									/>
								</Box>
								<CardHeader minH={"16"} alignItems={"start"}>
									<Heading as={"h3"} size={"sm"} lineClamp={2}>
										{blog.title}
									</Heading>
								</CardHeader>
								<CardBody>
									<HStack>
										{blog.categories?.map((category) => (
											<Tag key={category.id} size="sm">
												{category.name}
											</Tag>
										))}
									</HStack>
									<Text>{dayjs(blog.publishedAt).format("YYYY/MM/DD")}</Text>
								</CardBody>
							</Card>
						</Link>
					))}
				</SimpleGrid>
			</Section>
		</VStack>
	);
};

export default BlogListPage;
