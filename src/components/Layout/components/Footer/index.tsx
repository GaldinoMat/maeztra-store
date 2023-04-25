import Facebook from "../../../../assets/facebook.svg";
import Linkedin from "../../../../assets/Linkedin.svg";
import Instagram from "../../../../assets/Instagram.svg";
import youtube from "../../../../assets/youtube.svg";
import visa from "../../../../assets/visa.svg";
import mastercard from "../../../../assets/mastercard.svg";
import visa2 from "../../../../assets/visa.svg";
import mastercard2 from "../../../../assets/mastercard.svg";
import LogoVtex from "../../../../assets/logo footer.svg";
import MaeztraLogo from "../../../../assets/maeztra-logo.svg";
import FooterLogoLayout from "./components/FooterLogoLayout";

function Footer() {
  const iconsArr = [
    Facebook,
    Linkedin,
    Instagram,
    youtube,
    visa,
    mastercard,
    visa2,
    mastercard2,
  ];

  return (
    <footer className="bg-[#353535] text-white h-[14.5625rem] flex flex-wrap gap-6 px-20 py-6">
      {iconsArr.map((icon) => (
        <img src={icon} alt="footer icon" />
      ))}
      <FooterLogoLayout>
        <p className="text-[.625rem]">Powered by</p>
        <img className="w-[4.1875rem] h-[1.5625rem]" src={LogoVtex} alt="vtex grey logo" />
      </FooterLogoLayout>
      <FooterLogoLayout>
        <p className="text-[.625rem]">Developed by</p>
        <img className="w-[7.375rem] h-[1.8125rem]" src={MaeztraLogo} alt="maeztra grey logo" />
      </FooterLogoLayout>
    </footer>
  );
}

export default Footer;
