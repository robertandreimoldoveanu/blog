import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import { IFrontMatter } from "./../models/article";

const articlesDir = path.join("src", "articles");

function getArticlePaths() {
  return fs.readdirSync(articlesDir);
}

function readArticleFile(articlePath: string) {
  const articleSource = fs.readFileSync(articlePath, "utf-8");
  return matter(articleSource);
}

export async function getSlugs() {
  const articlePaths = getArticlePaths();

  return articlePaths.map((path) => {
    const fileName = path.split("/").slice(-1)[0];
    const [slug] = fileName.split(".");
    return slug;
  });
}

export async function getArticleFromSlug(slug: string) {
  const { content, data } = readArticleFile(`${articlesDir}/${slug}.mdx`);

  return {
    content,
    frontmatter: {
      slug,
      readingTime: readingTime(content).text,
      createdOn: data.createdOn,
      summary: data.summary,
      tags: data.tags,
      title: data.title,
    } as IFrontMatter,
  };
}

export async function getAllArticles(tag?: string) {
  const articlePaths = getArticlePaths();

  let articlesData = articlePaths.map((articlePath) => {
    const { data, content } = readArticleFile(
      path.join(articlesDir, articlePath)
    );
    return { data, content, articlePath };
  });

  if (tag) {
    articlesData = articlesData.filter(({ data }) => data.tags.includes(tag));
  }

  return articlesData.map(({ data, content, articlePath }) => {
    return {
      slug: articlePath.replace(".mdx", ""),
      readingTime: readingTime(content).text,
      createdOn: data.createdOn,
      summary: data.summary,
      tags: data.tags,
      title: data.title,
    } as IFrontMatter;
  });
}

export async function getAllArticlesForTag(tag: string) {
  return getAllArticles(tag);
}

export async function getAllTags() {
  const articlePaths = getArticlePaths();

  return Array.from(
    new Set(
      articlePaths
        .map((articlePath) => {
          const { data } = readArticleFile(path.join(articlesDir, articlePath));
          return data.tags ?? [];
        })
        .flat()
    )
  );
}
