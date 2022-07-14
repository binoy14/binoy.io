import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className="mb-8 rounded-lg bg-white p-5 text-black shadow sm:mb-0">{children}</div>;
}
