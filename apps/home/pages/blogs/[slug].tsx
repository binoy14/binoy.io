import { GetStaticPaths, GetStaticProps } from "next";

import { BlockContent } from "../../components/BlockContent";
import { GetBlogBySlug, getBlogBySlug } from "../../utils/groq/getBlogBySlug";
import { GetBlogs, getBlogs } from "../../utils/groq/getBlogs";
import { sanityClient } from "../../utils/sanityClientCdn";

interface Props {
  blog: GetBlogBySlug;
}

function Blog({ blog }: Props) {
  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="container mb-10 grid gap-5">
      <h1 className="text-2xl font-bold">{blog?.title}</h1>
      <p className="text-xs italic">{formattedDate}</p>
      {blog?.body && <BlockContent value={blog?.body} />}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await sanityClient.fetch<GetBlogs>(getBlogs);

  const paths =
    blogs.map(({ slug }) => {
      return {
        params: { slug: slug.current ?? "" },
      };
    }) ?? [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const blog = await sanityClient.fetch<GetBlogBySlug>(getBlogBySlug, {
    slug: context.params?.slug as string,
  });

  return {
    props: {
      blog,
    },
  };
};

export default Blog;
