import { ReactNode } from "react";

export interface BaseProps {
  className?: string;
}

export interface BasePropsPropsWithChildren extends BaseProps {
  children: ReactNode;
}
