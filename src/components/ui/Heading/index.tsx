import { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return <h2>{children}</h2>;
};
