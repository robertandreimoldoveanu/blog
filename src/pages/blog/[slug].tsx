import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import Basic from "../../components/Basic";
import { getArticleFromSlug, getSlugs } from "../../data-access/articles";
import { IFrontMatter } from "../../models/article";
import { mdxOptions } from "../../utils/mdxOptions";

export interface IArticleProps {
  frontmatter: IFrontMatter;
  source: any;
}

export default function ArticlePage({ frontmatter, source }: IArticleProps) {
  const title = `${frontmatter.title} | robert's digital garden`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="prose prose-stone article-container">
        <h1 className="article-title">{frontmatter.title}</h1>
        <p className="publish-date text-right italic text-gray-600">
          {frontmatter.createdOn} &mdash; {frontmatter.readingTime}
        </p>
        <div className="indent-8 content">
          {/* the component is not actually used, just for example purposes */}
          <MDXRemote {...source} components={{ Basic }} />
        </div>
      </div>
    </>
  );
}

interface IArticleParams extends ParsedUrlQuery {
  slug: string;
}

// this tells next.js which paths to pre-render
// the result of this is the argument to `getStaticProps` 
export async function getStaticPaths(): Promise<
  GetStaticPathsResult<IArticleParams>
> {
  const paths = (await getSlugs()).map((filename) => {
    return {
      params: {
        slug: filename,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<IArticleParams>): Promise<
  GetStaticPropsResult<IArticleProps>
> {
  const slug = params?.slug ?? "";
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions,
  });
  return {
    props: {
      frontmatter: frontmatter as IFrontMatter,
      source: mdxSource,
    },
  };
}
