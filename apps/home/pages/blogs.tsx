import { Card } from "@binoy14/ui";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import readingTime from "reading-time";

interface Page {
  title: string;
  description: string;
  date: string;
  slug: string;
  readingTime: string;
  categories: string[];
  keywords: string[];
}

interface Props {
  pages: Page[];
}

const BlogsPage: NextPage<Props> = ({ pages }) => {
  return (
    <>
      <Head>
        <title>Blogs - Binoy Patel</title>
      </Head>
      <div className="container">
        {pages.map((page) => {
          const formattedDate = new Date(page.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });

          return (
            <Card key={page.title} className="my-10 py-10 px-10 first:mt-0">
              <Link href={`/blogs/${page.slug}`}>
                <h1 className="text-xl font-bold">{page.title}</h1>
              </Link>
              <h4 className="mt-2">
                {formattedDate} - {page.readingTime}
              </h4>
              <p className="mt-4 text-lg">{page.description}</p>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const blogsPath = `${process.cwd()}/apps/home/pages/blogs`;
  const mdxPages = fs.readdirSync(blogsPath);

  const pages: Page[] = [];

  for (let i = 0; i < mdxPages.length; i++) {
    const mdxPage = fs.readFileSync(`${blogsPath}/${mdxPages[i]}`);

    const { data, content } = matter(mdxPage);
    pages.push({ ...data, slug: mdxPages[i].replace(".mdx", ""), readingTime: readingTime(content).text } as Page);
  }

  const sortedPages = pages.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime();
  });

  return {
    props: {
      pages: sortedPages,
    },
  };
};

export default BlogsPage;
