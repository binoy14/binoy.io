import { Card, Section, TextBlock } from "@binoy14/ui";

import { Layout } from "../components/Layout";

function Index() {
  return (
    <Layout>
      <Section type="light">
        <TextBlock header="Hey 👋, I'm Binoy" subtext="Full Stack Developer, React Groupie and GraphQL Enthusiast" />
      </Section>
      <h2 className="mx-10 mt-10 text-xl font-bold">Projects</h2>
      <Section type="dark" className="grid-cols-cards mt-5 mb-10 grid gap-10">
        <Card>
          <h3 className="text-lg font-bold">Smart S</h3>
          <p>
            Smart S is a mobile application for Android and iOS tablets that turns any device you might have available
            (high-end or low-end) into an simple, attractive, informative kiosk for your home. Smart S application
            provides you information about Weather, News, Traffic Predictions and when idle it turns into a photo
            slideshow
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold">Smart S</h3>
          <p>
            Smart S is a mobile application for Android and iOS tablets that turns any device you might have available
            (high-end or low-end) into an simple, attractive, informative kiosk for your home. Smart S application
            provides you information about Weather, News, Traffic Predictions and when idle it turns into a photo
            slideshow
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold">Smart S</h3>
          <p>
            Smart S is a mobile application for Android and iOS tablets that turns any device you might have available
            (high-end or low-end) into an simple, attractive, informative kiosk for your home. Smart S application
            provides you information about Weather, News, Traffic Predictions and when idle it turns into a photo
            slideshow
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold">Smart S</h3>
          <p>
            Smart S is a mobile application for Android and iOS tablets that turns any device you might have available
            (high-end or low-end) into an simple, attractive, informative kiosk for your home. Smart S application
            provides you information about Weather, News, Traffic Predictions and when idle it turns into a photo
            slideshow
          </p>
        </Card>
      </Section>
    </Layout>
  );
}

export default Index;
