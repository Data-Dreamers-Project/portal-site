"use client";

import { Button, Heading, Text, VStack } from "@yamada-ui/react";
import { useEffect } from "react";

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<VStack flex={1} align="center" justify="center" gap={4} py={16}>
			<Heading as="h2" size="xl">
				エラーが発生しました
			</Heading>
			<Text color="gray.500" textAlign="center" maxW="md">
				ページの読み込み中に問題が発生しました。しばらく経ってからもう一度お試しください。
			</Text>
			<Button onClick={reset} colorScheme="primary">
				再試行
			</Button>
		</VStack>
	);
}
