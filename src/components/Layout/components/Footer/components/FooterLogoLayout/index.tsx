import { ReactNode } from "react";

interface FooterLogoLayoutProps {
  children: ReactNode;
}

function FooterLogoLayout({ children }: FooterLogoLayoutProps) {
  return <div className="flex flex-col gap-1">{children}</div>;
}

export default FooterLogoLayout;
