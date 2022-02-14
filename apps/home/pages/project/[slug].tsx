import { GetProjectBySlugQuery, getSdk } from "@binoy14/cms-types";
import { GraphQLClient } from "graphql-request";
import { GetStaticPaths, GetStaticProps } from "next";

import { Layout } from "../../components/Layout";

interface Props {
  project?: GetProjectBySlugQuery["allProject"][0];
}

function Project({ project }: Props) {
  return (
    <Layout>
      <div className="container mb-10 grid gap-5">
        <h1 className="text-2xl font-bold">{project?.title}</h1>
        <p>{project?.description}</p>
        {project?.projectImages?.map((projectImage) => (
          <div key={projectImage?._id} className="grid justify-center gap-5">
            <h3 className="text-lg font-bold">{projectImage?.image?.caption}</h3>
            <img className="h-96" src={projectImage?.image?.asset?.url ?? ""} alt={projectImage?.image?.alt || ""} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = new GraphQLClient(process.env.SANITY_GRAPHQL_URL, {
    headers: {
      Authorization: `Bearer ${process.env.SANITY_READ_TOKEN}`,
    },
  });
  const sdk = getSdk(client);
  const { data } = await sdk.getProjectsSlugs();

  const paths =
    data?.allProject.map((project) => {
      return {
        params: { slug: project.slug?.current ?? "" },
      };
    }) ?? [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const client = new GraphQLClient(process.env.SANITY_GRAPHQL_URL, {
    headers: {
      Authorization: `Bearer ${process.env.SANITY_READ_TOKEN}`,
    },
  });

  const sdk = getSdk(client);
  const { data } = await sdk.getProjectBySlug({ slug: context.params?.slug as string });

  return {
    props: {
      project: data?.allProject[0],
    },
  };
};

export default Project;
