import classnames from "classnames";

import { BasePropsPropsWithChildren } from "../types";

export type SectionType = "dark" | "light";
export interface SectionProps extends BasePropsPropsWithChildren {
  type: SectionType;
}

export function Section({ children, type, className = "" }: SectionProps) {
  return (
    <div
      className={classnames(
        "py-6",
        {
          "text-white": type === "dark",
          "bg-black": type === "dark",
          "bg-white": type === "light",
          "text-black": type === "light",
        },
        className
      )}
    >
      <div className="container">{children}</div>
    </div>
  );
}

export default Section;
