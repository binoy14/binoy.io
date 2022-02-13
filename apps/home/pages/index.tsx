import { Section, TextBlock } from "@binoy14/ui";

import { Layout } from "../components/Layout";

function Index() {
  return (
    <Layout>
      <Section type="light">
        <TextBlock header="Hey 👋, I'm Binoy" subtext="Full Stack Developer, React Groupie and GraphQL Enthusiast" />
      </Section>
    </Layout>
  );
}

export default Index;
