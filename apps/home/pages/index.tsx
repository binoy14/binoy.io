import { GetProjectsQuery, getSdk } from "@binoy14/cms-types";
import { Card, Section, TextBlock } from "@binoy14/ui";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

import { imageBuilder } from "../utils/sanityClientCdn";

interface Props {
  projects?: GetProjectsQuery["allProject"];
}

const Index: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <Section type="light">
        <div className="container">
          <TextBlock header="Hey 👋, I'm Binoy" subtext="Full Stack Developer, React Groupie and GraphQL Enthusiast" />
        </div>
      </Section>
      <div className="container">
        <h2 className="mt-10 text-xl font-bold">Projects</h2>

        <Section type="dark" className="sm:grid-cols-projects mt-5 sm:grid sm:gap-10">
          {projects?.map((project) => {
            const imgUrl = project.featuredImage
              ? imageBuilder.image(project.featuredImage).auto("format").quality(100).width(600).url()
              : null;

            return (
              <Card key={project._id}>
                <div className="sm:grid-cols-projectContent flex h-full flex-col items-center sm:grid">
                  {imgUrl && (
                    <Link href={`/project/${project.slug?.current}`}>
                      <a className="sm:mr-8">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="max-h-[350px] w-full object-contain"
                          src={imgUrl}
                          alt={project?.featuredImage?.alt || ""}
                        />
                      </a>
                    </Link>
                  )}
                  <Link href={`/project/${project.slug?.current}`}>
                    <a className="my-8">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p>{project.featuredDescription}</p>
                    </a>
                  </Link>
                </div>
              </Card>
            );
          })}
        </Section>
      </div>
    </>
  );
};

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
