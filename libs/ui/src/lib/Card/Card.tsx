import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className="min-w-[500px] max-w-[600px] rounded-lg bg-white p-5 text-black shadow">{children}</div>;
}
