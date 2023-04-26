import { ReactNode } from "react";

interface ButtonLayoutProps {
  children: ReactNode;
  border?: boolean;
}

function ButtonLayout({ children, border = false }: ButtonLayoutProps) {
  return (
    <button
      className={`flex gap-2 items-center ${
        border && "lg:rounded-lg lg:border lg:border-[#FAA500] lg:py-3 lg:px-[.875rem]"
      }`}
    >
      {children}
    </button>
  );
}

export default ButtonLayout;
