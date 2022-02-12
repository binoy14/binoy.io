import { getSdk } from "@binoy14/cms-types";
import { Section } from "@binoy14/ui";
import classnames from "classnames";
import { GraphQLClient } from "graphql-request";
import { GetStaticPaths, GetStaticProps } from "next";

import { Layout, LayoutProps } from "../components/Layout";

type Props = LayoutProps;

export function Index({ navData }: Props) {
  return (
    <Layout navData={navData}>
      <div>
        <Section type="light" classNames={classnames("h-40")}>
          <h1 className="mb-1 text-3xl">Hey 👋, I&apos;m Binoy</h1>
          <span>Web Developer, React Groupie and GraphQL Enthusiast</span>
        </Section>
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

  const { data } = await sdk.getPagesRoutes();

  const paths = data.allPage.map((page) => ({
    params: { page: page.slug.link?.current ? [page.slug.link.current] : [], id: "test" },
  }));

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

  const { data } = await sdk.getNavigation();

  return {
    props: {
      navData: data.allNavigation[0],
    },
  };
};

export default Index;
