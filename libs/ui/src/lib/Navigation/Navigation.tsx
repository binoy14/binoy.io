/* eslint-disable jsx-a11y/anchor-is-valid */
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export interface NavLinks {
  text: string;
  link: string;
}

export interface UiProps {
  links: NavLinks[];
  title?: string;
}

export function Navigation({ links, title }: UiProps) {
  const [navOpen, setNavOpen] = useState(false);
  const { asPath } = useRouter();

  const onClick = () => setNavOpen((prev) => !prev);

  const linkClasses = classnames("hover:underline", "hover:text-yellow-400");

  return (
    <>
      <nav className="container">
        <div className="flex h-24 w-full items-center bg-black pr-4 text-white transition-all sm:h-36">
          <h2 className="flex-1 text-4xl">{title}</h2>
          {/* Desktop Nav */}
          <ul className="hidden sm:flex">
            {links.map((navLink) => {
              const { text, link } = navLink;
              const href = `/${link}`;

              return (
                <li
                  key={href}
                  className={classnames(linkClasses, "mr-6", {
                    "text-yellow-400": asPath === href,
                  })}
                >
                  <Link href={href}>
                    <a>{text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Mobile Nav */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-400"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={onClick}
            >
              <span className="sr-only">Open Main Menu</span>
              {navOpen ? <MdClose size="24px" /> : <MdMenu size="24px" />}
            </button>
          </div>
        </div>
      </nav>
      <ul
        className={classnames(
          "flex",
          "flex-col",
          "items-center",
          "sm:hidden",
          "bg-black",
          "text-white",
          "transition-all",
          {
            "max-h-52": navOpen === true,
            "pb-4": navOpen === true,
            "max-h-0": navOpen === false,
          }
        )}
      >
        {navOpen &&
          links?.map((navLink) => {
            const { text, link } = navLink;
            const href = `/${link}`;

            return (
              <li key={href} className={`mb-6 ${linkClasses}`}>
                <Link href={href}>
                  <a className="text-xl">{text}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Navigation;
