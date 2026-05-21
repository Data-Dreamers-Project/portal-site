"use client";

import { Button, Heading, Text, VStack } from "@yamada-ui/react";
import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function BlogError({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<VStack flex={1} align="center" justify="center" gap={4} py={16}>
			<Heading as="h2" size="xl">
				記事を読み込めませんでした
			</Heading>
			<Text color="gray.500" textAlign="center" maxW="md">
				ブログ記事の取得中にエラーが発生しました。しばらく経ってからもう一度お試しください。
			</Text>
			<VStack gap={2}>
				<Button onClick={reset} colorScheme="primary">
					再試行
				</Button>
				<Button as={Link} href="/" variant="ghost">
					トップページへ戻る
				</Button>
			</VStack>
		</VStack>
	);
}
