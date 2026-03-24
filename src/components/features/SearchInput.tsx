"use client";

import { Input } from "@yamada-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const initialSearchWord = searchParams.get("q") || "";
	const [searchWord, setSearchWord] = useState(initialSearchWord);

	// キーが押されたときの処理
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			// Enterキーが押されたときの処理
			e.preventDefault(); // デフォルトのEnterキーの動作を無効化
			const params = new URLSearchParams(Array.from(searchParams.entries()));
			params.set("q", searchWord);
			router.push(`?${params}`);
		}
	};

	return (
		<Input
			name="q"
			value={searchWord}
			placeholder="検索ワードを入力"
			onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
				setSearchWord(e.target.value)
			}
			onKeyDown={handleKeyDown}
		/>
	);
};
