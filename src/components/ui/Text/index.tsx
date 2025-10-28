import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return <p>{children}</p>;
};
