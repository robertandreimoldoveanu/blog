import { GetStaticPropsResult } from "next";
import Head from "next/head";
import Link from "next/link";
import ArticlePreview from "../components/Article";
import { getAllArticles } from "../data-access/articles";
import { IFrontMatter } from "../models/article";

interface IIndexProps {
  articles: Partial<IFrontMatter>[];
}

export default function Home({ articles }: IIndexProps) {
  return (
    <>
      <Head>
        <title>robert&apos;s digital garden</title>
      </Head>
      <div className="container">
        <div className="articles">
          {articles.map((article, index) => {
            return <div key={index}>
              <ArticlePreview  article={article}></ArticlePreview>
              {index < articles.length - 1 && <hr />}
            </div>;
          })}
        </div>
      </div>
    </>
  );
}

// with `getStaticProps`, Next.js pre-renders this page at build time using the props returned.
// since these props are hydrated in the initial HTML, don't put sensitive data there
//
// besides build time, it's also called when using "revalidate" for Incremental Static Regeneration
//
// it doesn't have any access to the request to the site (such as query params or HTTP headers)
// but you can use Middleware in addition to getStaticProps for this purpose
//
// would be a good practice to decouple any data fetching logic with the wrapping into static props
// this way the logic can also be reused for server side rendering if need-be, not just SSG
export async function getStaticProps(): Promise<
  GetStaticPropsResult<IIndexProps>
> {
  const articles = await getAllArticles();

  articles.sort((a, b) => {
    if (a.createdOn === b.createdOn) return 0;
    return a.createdOn < b.createdOn ? 1 : -1;
  });

  return {
    props: {
      articles,
    },
  };
}
