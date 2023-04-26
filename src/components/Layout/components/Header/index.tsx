import TipBar from "./components/TipBar";
import MobileHeader from "./components/MobileHeader";
import useIsMobile from "../../../../hooks/useIsMobile";
import DesktopHeader from "./components/DesktopHeader";

function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="">
      <TipBar />
      <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>
    </header>
  );
}

export default Header;
