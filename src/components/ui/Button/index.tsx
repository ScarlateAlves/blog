import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="py-2 px-4 cursor-pointer border w-fit hover:bg-gray-100 active:border-gray-700 active:border-2">
      {children}
    </button>
  );
};
