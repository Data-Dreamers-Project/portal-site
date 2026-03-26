"use client";

import { Autocomplete, AutocompleteOption } from "@yamada-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

type CategorySelectorProps = {
	categories: { id: string; name: string }[];
	selectedCategory: string;
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
	categories,
	selectedCategory,
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleCategoryChange = (value: string) => {
		const currentParams = new URLSearchParams(
			Array.from(searchParams.entries()),
		);
		currentParams.set("category", value);
		router.push(`?${currentParams.toString()}`);
	};

	return (
		<Autocomplete
			placeholder="カテゴリ選択"
			emptyMessage="存在しないカテゴリです"
			defaultValue={selectedCategory}
			onChange={handleCategoryChange}
		>
			{categories.map((category) => (
				<AutocompleteOption key={category.id} value={category.id}>
					{category.name}
				</AutocompleteOption>
			))}
		</Autocomplete>
	);
};
