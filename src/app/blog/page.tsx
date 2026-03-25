import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Heading,
	HStack,
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
import { CategorySelector } from "~/components/features/CategorySelector";
import { SearchInput } from "~/components/features/SearchInput";
import Section from "~/components/layout/Section";
import { DummyImageById } from "~/constants/dummyImages";
import { BLOG_REVALIDATE } from "~/constants/revalidate";
import { client } from "~/libs/microcms/client";
import type { Blog, Category } from "~/types/blog";

export const revalidate = BLOG_REVALIDATE;

interface BlogListPageProps {
	searchParams: {
		q?: string;
		category?: string;
	};
}

const BlogListPage = async ({ searchParams }: BlogListPageProps) => {
	const searchWord = searchParams.q || "";
	const selectedCategory = searchParams.category || "";

	const data = await client.get<Blog>({
		endpoint: "blogs",
		queries: {
			filters: [
				searchWord ? `title[contains]${searchWord}` : undefined,
				selectedCategory
					? `categories[contains]${selectedCategory}`
					: undefined,
			]
				.filter(Boolean)
				.join("[and]"),
		},
	});

	const categoriesData = await client.getList<Category>({
		endpoint: "categories",
	});

	if (!data || !categoriesData) {
		return <Loading variant="circles" />;
	}

	const isEmpty = data.contents.length === 0;

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
				{isEmpty ? (
					<Box
						w="full"
						borderWidth="1px"
						borderColor="gray.200"
						rounded="md"
						py={12}
						px={6}
						textAlign="center"
					>
						<Text as="b">該当する記事が見つかりませんでした。</Text>
						<Text color="gray.600" mt={2}>
							検索条件を変更して、もう一度お試しください。
						</Text>
					</Box>
				) : (
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
											src={blog.eyecatch?.url ?? DummyImageById(blog.id)}
											alt={blog.title}
											fill
											sizes="(max-width: 479px) 33vw, 100vw"
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
				)}
			</Section>
		</VStack>
	);
};

export default BlogListPage;
