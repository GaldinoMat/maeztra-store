import { ReactNode } from "react";

interface ButtonLayoutProps {
  children: ReactNode;
}

function ButtonLayout({ children }: ButtonLayoutProps) {
  return <button className="flex gap-2 items-center">{children}</button>;
}

export default ButtonLayout;
