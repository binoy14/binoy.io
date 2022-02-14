import { GetProjectsQuery, getSdk } from "@binoy14/cms-types";
import { Card, Section, TextBlock } from "@binoy14/ui";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps } from "next";
import Link from "next/link";

import { Layout } from "../components/Layout";

interface Props {
  projects?: GetProjectsQuery["allProject"];
}

function Index({ projects }: Props) {
  return (
    <Layout>
      <Section type="light">
        <TextBlock header="Hey 👋, I'm Binoy" subtext="Full Stack Developer, React Groupie and GraphQL Enthusiast" />
      </Section>
      <div className="container">
        <h2 className="mt-10 text-xl font-bold">Projects</h2>
        <Section type="dark" className="grid-cols-cards mt-5 grid gap-10">
          {projects?.map((project) => (
            <Card key={project._id}>
              <div className="grid min-h-[300px] grid-cols-2 items-center gap-4">
                {project?.featuredImage?.asset?.url && (
                  <img src={project.featuredImage.asset?.url} alt={project.featuredImage.alt || ""} />
                )}
                <span>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p>{project.featuredDescription}</p>
                </span>
              </div>
              <Link href={`/project/${project.slug?.current}`}>
                <a>View Details</a>
              </Link>
            </Card>
          ))}
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
