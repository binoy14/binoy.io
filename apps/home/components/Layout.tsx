import { BasePropsPropsWithChildren, Footer, Navigation, NavLinks } from "@binoy14/ui";
import React from "react";

const links: NavLinks[] = [
  {
    text: "Home",
    link: "",
  },
  {
    text: "Blogs",
    link: "blogs",
  },
];

export const Layout: React.FC<BasePropsPropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navigation title="Binoy Patel" links={links} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
