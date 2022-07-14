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
          "bg-black text-white": type === "dark",
          "bg-white text-black": type === "light",
        },
        className
      )}
    >
      {children}
    </div>
  );
}

export default Section;
