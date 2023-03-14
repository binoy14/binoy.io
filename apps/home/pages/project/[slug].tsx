import { GetStaticPaths, GetStaticProps } from "next";

import { BlockContent } from "../../components/BlockContent";
import { Image } from "../../components/Image";
import { GetProjectBySlug, getProjectBySlug } from "../../utils/groq/getProjectBySlug";
import { GetProjectSlug, getProjectSlugs } from "../../utils/groq/getProjectsSlugs";
import { sanityClient } from "../../utils/sanityClientCdn";

interface Props {
  project?: GetProjectBySlug;
}

function Project({ project }: Props) {
  return (
    <div className="container mb-10 grid gap-5">
      <h1 className="text-2xl font-bold">{project?.title}</h1>
      {project?.description && <BlockContent value={project?.description} />}
      {project?.projectImages?.map((projectImage) => {
        return (
          <div key={projectImage?._id} className="grid justify-center gap-5">
            <h3 className="text-lg font-bold">{projectImage?.caption}</h3>
            <Image width={800} height={400} src={projectImage?.image} alt={projectImage?.alt || ""} />
          </div>
        );
      })}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await sanityClient.fetch<GetProjectSlug[]>(getProjectSlugs);

  const paths =
    slugs.map(({ slug }) => {
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
  const project = await sanityClient.fetch<GetProjectBySlug>(getProjectBySlug, {
    slug: context.params?.slug as string,
  });

  return {
    props: {
      project,
    },
  };
};

export default Project;
