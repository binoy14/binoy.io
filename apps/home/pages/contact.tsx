import { Card } from "@binoy14/ui";
import { NextPage } from "next";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Links = [
  {
    link: "https://twitter.com/binoyp14",
    Icon: FaTwitter,
  },
  {
    link: "https://www.youtube.com/user/binoypatel14",
    Icon: FaYoutube,
  },
  {
    link: "mailto:me@binoy.io",
    Icon: MdEmail,
  },
  {
    link: "https://github.com/binoy14",
    Icon: FaGithub,
  },
  {
    link: "https://www.linkedin.com/in/binoy14",
    Icon: FaLinkedin,
  },
];

const ContactPage: NextPage = () => {
  return (
    <div className="container">
      <Card>
        <h1 className="text-2xl font-bold">Say Hello!</h1>
        <div className="my-10 flex flex-wrap justify-center">
          {Links.map(({ link, Icon }) => (
            <a href={link} key={link} target="_blank" rel="noreferrer noopener" className="ml-8 mb-8 first:ml-0">
              <Icon size={50} />
            </a>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ContactPage;
