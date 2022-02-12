import classnames from "classnames";

import { BasePropsPropsWithChildren } from "../types";

export interface SectionProps extends BasePropsPropsWithChildren {
  type: "dark" | "light";
}

export function Section({ children, type, classNames = "" }: SectionProps) {
  return (
    <div
      className={classnames(
        "p-6",
        {
          "text-white": type === "dark",
          "bg-black": type === "dark",
          "bg-white": type === "light",
          "text-black": type === "light",
        },
        classNames
      )}
    >
      {children}
    </div>
  );
}

export default Section;
