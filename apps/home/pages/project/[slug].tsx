import { GraphQLClient } from "graphql-request";
import { GetStaticPaths, GetStaticProps } from "next";

import { BlockContent } from "../../components/BlockContent";
import { GetProjectBySlugQuery, getSdk } from "../../utils/graphql";
import { imageBuilder } from "../../utils/sanityClientCdn";

interface Props {
  project?: GetProjectBySlugQuery["allProject"][0];
}

function Project({ project }: Props) {
  return (
    <div className="container mb-10 grid gap-5">
      <h1 className="text-2xl font-bold">{project?.title}</h1>
      <BlockContent value={project?.descriptionRaw} />
      {project?.projectImages?.map((projectImage) => {
        const imgUrl = projectImage?.image
          ? imageBuilder.image(projectImage?.image).auto("format").quality(100).width(800).url() ?? ""
          : null;

        return (
          <div key={projectImage?._id} className="grid justify-center gap-5">
            <h3 className="text-lg font-bold">{projectImage?.caption}</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {imgUrl && <img className="h-96" src={imgUrl} alt={projectImage?.alt || ""} />}
          </div>
        );
      })}
    </div>
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
