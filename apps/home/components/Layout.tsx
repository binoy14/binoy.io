import { Navigation, NavLinks } from "@binoy14/ui";
import React from "react";

const links: NavLinks[] = [
  {
    text: "Home",
    link: "",
  },
];

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation title="Binoy Patel" links={links} />
      <main>{children}</main>
    </>
  );
};
