import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { SerializeOptions } from "./../../node_modules/next-mdx-remote/dist/types.d";

export const mdxOptions: SerializeOptions["mdxOptions"] = {
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        properties: { className: ["anchor"] },
      },
      { behaviour: "wrap" },
    ],
    rehypeHighlight,
    rehypeCodeTitles,
  ],
};
