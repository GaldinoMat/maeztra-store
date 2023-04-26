import { iconsMobileArr } from "../../../../../utils/homeUtils";
import FooterLogoLayout from "../FooterLogoLayout";
import LogoVtex from "../../../../../../assets/logo footer.svg";
import MaeztraLogo from "../../../../../../assets/maeztra-logo.svg";

function FooterMobile() {
  return (
    <section className="px-20 flex flex-wrap gap-6 bg-[#353535] text-white py-6 h-[14.5625rem]">
      {iconsMobileArr.map((icon) => (
        <img src={icon} alt="footer icon" key={icon} />
      ))}
      <FooterLogoLayout>
        <p className="text-[.625rem]">Powered by</p>
        <img
          className="w-[4.1875rem] h-[1.5625rem]"
          src={LogoVtex}
          alt="vtex grey logo"
        />
      </FooterLogoLayout>
      <FooterLogoLayout>
        <p className="text-[.625rem]">Developed by</p>
        <img
          className="w-[7.375rem] h-[1.8125rem]"
          src={MaeztraLogo}
          alt="maeztra grey logo"
        />
      </FooterLogoLayout>
    </section>
  );
}

export default FooterMobile;
