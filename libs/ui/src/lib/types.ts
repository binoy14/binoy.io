import { ReactNode } from "react";

export interface BaseProps {
  classNames?: string;
}

export interface BasePropsPropsWithChildren extends BaseProps {
  children: ReactNode;
}
