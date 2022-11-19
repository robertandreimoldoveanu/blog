export interface IFrontMatter {
  title: string;
  createdOn: string;
  summary: [];
  tags: string[];
  slug: string;
  readingTime: string;
}

export interface IBasePost {
  slug: string;
  frontmatter: IFrontMatter;
}

export interface IPost extends IBasePost {
  content: any;
}
