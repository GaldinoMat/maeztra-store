import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="font-Titillium">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
