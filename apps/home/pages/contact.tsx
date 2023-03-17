import { Card, getIcon } from "@binoy14/ui";
import { GetStaticProps, NextPage } from "next";
import React from "react";

import { GetContacts, getContacts } from "../utils/groq/getContacts";
import { sanityClient } from "../utils/sanityClientCdn";

interface Props {
  contacts: GetContacts;
}

const ContactPage: NextPage<Props> = ({ contacts }) => {
  return (
    <div className="container">
      <Card>
        <h1 className="text-2xl font-bold">Say Hello!</h1>
        <div className="my-10 flex flex-wrap justify-center">
          {contacts.map(({ link, title }) => {
            const Icon = getIcon(title);

            if (Icon) {
              return (
                <a href={link} key={link} target="_blank" rel="noreferrer noopener" className="ml-8 mb-8 first:ml-0">
                  <Icon size={50} title={title} />
                </a>
              );
            }

            return null;
          })}
        </div>
      </Card>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contacts = await sanityClient.fetch<GetContacts>(getContacts);

  return {
    props: {
      contacts,
    },
  };
};

export default ContactPage;
