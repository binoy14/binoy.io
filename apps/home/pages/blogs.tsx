import { Card } from "@binoy14/ui";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { GetBlogs, getBlogs } from "../utils/groq/getBlogs";
import { sanityClient } from "../utils/sanityClientCdn";

interface Props {
  pages: GetBlogs;
}

const BlogsPage: NextPage<Props> = ({ pages }) => {
  return (
    <>
      <Head>
        <title>Blogs - Binoy Patel</title>
      </Head>
      <div className="container">
        {pages.map((page) => {
          const formattedDate = new Date(page.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });

          return (
            <Card key={page.title} className="my-10 py-10 px-10 first:mt-0">
              <Link href={`/blogs/${page.slug.current}`}>
                <h1 className="text-xl font-bold">{page.title}</h1>
              </Link>
              <h4 className="mt-2">
                {/* {formattedDate} - {page.readingTime} */}
                {formattedDate}
              </h4>
              <p className="mt-4 text-lg">{page.description}</p>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = await sanityClient.fetch<GetBlogs>(getBlogs);

  return {
    props: {
      pages: blogs,
    },
  };
};

export default BlogsPage;
