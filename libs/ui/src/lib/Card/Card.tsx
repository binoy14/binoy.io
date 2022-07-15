import { BasePropsPropsWithChildren } from "../types";

export function Card({ children, className = "" }: BasePropsPropsWithChildren) {
  return <div className={`mb-8 rounded-lg bg-white p-5 text-black shadow sm:mb-0 ${className}`}>{children}</div>;
}
