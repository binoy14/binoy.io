import { GetProjectsQuery, getSdk } from "@binoy14/cms-types";
import { Card, Section, TextBlock } from "@binoy14/ui";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps } from "next";
import Link from "next/link";

import { Layout } from "../components/Layout";
import { imageBuilder } from "../utils/sanityClientCdn";

interface Props {
  projects?: GetProjectsQuery["allProject"];
}

function Index({ projects }: Props) {
  return (
    <Layout>
      <Section type="light">
        <div className="container">
          <TextBlock header="Hey 👋, I'm Binoy" subtext="Full Stack Developer, React Groupie and GraphQL Enthusiast" />
        </div>
      </Section>
      <div className="container">
        <h2 className="mt-10 text-xl font-bold">Projects</h2>
        <Section type="dark" className="sm:grid-cols-cards mt-5 sm:grid sm:gap-10">
          {projects?.map((project) => {
            const imgUrl = project.featuredImage
              ? imageBuilder.image(project.featuredImage).auto("format").quality(100).width(600).url()
              : null;

            return (
              <>
                <Card key={project._id}>
                  <div className="flex flex-col">
                    {imgUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className="rounded border border-gray-100"
                        src={imgUrl}
                        alt={project?.featuredImage?.alt || ""}
                      />
                    )}
                    <div className="my-4">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p>{project.featuredDescription}</p>
                    </div>
                    <Link href={`/project/${project.slug?.current}`}>
                      <a>View Details</a>
                    </Link>
                  </div>
                </Card>
              </>
            );
          })}
        </Section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new GraphQLClient(process.env.SANITY_GRAPHQL_URL, {
    headers: {
      Authorization: `Bearer ${process.env.SANITY_READ_TOKEN}`,
    },
  });

  const sdk = getSdk(client);
  const { data } = await sdk.getProjects();

  return {
    props: {
      projects: data?.allProject,
    },
  };
};

export default Index;
