import Link from "next/link";
import { IFrontMatter } from "../models/article";

interface IArticleProps {
  article: Partial<IFrontMatter>;
}

export default function ArticlePreview({ article }: IArticleProps) {
  return (
    <div className="post-container">
      <Link href={`/blog/${article.slug}`}>
        <h1 className="indent-8 text-2xl">{article.title}</h1>
      </Link>
      <div className="details indent-8 text-gray-500">
        <em>{article.createdOn?.toString()}</em> - <em>{article.readingTime?.toString()}</em>
      </div>
      <p className="indent-8">{article.summary}</p>
      <Link className="text-right block italic text-slate-600" href={`/blog/${article.slug}`}>(click to read)</Link>
    </div>
  );
}
