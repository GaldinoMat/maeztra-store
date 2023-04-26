import useIsMobile from "../../../../hooks/useIsMobile";
import FooterDesktop from "./components/FooterDesktop";
import FooterMobile from "./components/FooterMobile";

function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </footer>
  );
}

export default Footer;
