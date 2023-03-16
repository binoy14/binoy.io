import { Card } from "@binoy14/ui";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { GetContacts, getContacts } from "../utils/groq/getContacts";
import { sanityClient } from "../utils/sanityClientCdn";

const iconMap = {
  Twitter: FaTwitter,
  Youtube: FaYoutube,
  Email: MdEmail,
  Github: FaGithub,
  Linkedin: FaLinkedin,
} as const;

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
            const Icon = iconMap[title as keyof typeof iconMap];
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
