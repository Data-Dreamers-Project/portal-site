import parse from "html-react-parser";
import { options } from "~/libs/html-react-parser/options";
import type { Content } from "~/types/blog";

type Props = {
	data: Content;
};

export const Article = ({ data }: Props) => {
	return <>{parse(data.content, options)}</>;
};
