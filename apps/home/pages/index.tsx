import { Card, Section, TextBlock } from "@binoy14/ui";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

import { Image } from "../components/Image";
import { getProjects, Project } from "../utils/groq/getProjects";
import { sanityClient } from "../utils/sanityClientCdn";

interface Props {
  projects: Project[];
}

const Index: NextPage<Props> = (props) => {
  const { projects } = props;

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
            return (
              <Card key={project?._id}>
                <div className="sm:grid-cols-projectContent flex h-full min-h-[390px] flex-col items-center sm:grid">
                  <Link className="sm:mr-8" href={`/project/${project?.slug?.current}`}>
                    <Image
                      src={project?.featuredImage}
                      alt={project?.featuredImage?.alt || ""}
                      width={500}
                      height={350}
                      priority={false}
                    />
                  </Link>
                  <Link className="my-8" href={`/project/${project?.slug?.current}`}>
                    <h3 className="text-lg font-bold">{project?.title}</h3>
                    <p>{project?.featuredDescription}</p>
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
  const projects = await sanityClient.fetch<Project[]>(getProjects);

  return {
    props: {
      projects,
    },
  };
};

export default Index;
