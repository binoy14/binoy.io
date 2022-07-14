import { Footer, Navigation, NavLinks } from "@binoy14/ui";
import React from "react";

import { ChildProps } from "./types";

const links: NavLinks[] = [
  {
    text: "Home",
    link: "",
  },
];

export const Layout: React.FC<ChildProps> = ({ children }) => {
  return (
    <>
      <Navigation title="Binoy Patel" links={links} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
