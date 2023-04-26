import {
  FooterLinks,
  iconsDeskArr1,
  iconsDeskArr2,
} from "../../../../../utils/homeUtils";
import FooterLogoLayout from "../FooterLogoLayout";
import FooterLinkList from "./components/FooterLinkList";
import LogoVtex from "../../../../../../assets/logo footer.svg";
import MaeztraLogo from "../../../../../../assets/maeztra-logo.svg";

function FooterDesktop() {
  return (
    <section className="w-full text-[#353535]">
      <div className="py-10 px-16 lg:px-[31rem] flex justify-between w-full">
        {FooterLinks.map((footerLinkObj) => (
          <FooterLinkList
            LinkListTitle={footerLinkObj.title}
            Links={footerLinkObj.links}
            key={footerLinkObj.title}
          />
        ))}
      </div>
      <div className="w-full h-[5.3125rem] bg-[#353535] mt-16 flex justify-between items-center px-6 lg:px-36">
        <div className="flex gap-[1.375rem]">
          {iconsDeskArr1.map((deskIcons) => (
            <img src={deskIcons} alt="footer icon" key={deskIcons} />
          ))}
        </div>
        <div className="flex gap-[1.375rem]">
          {iconsDeskArr2.map((deskIcons) => (
            <img src={deskIcons} alt="footer icon" key={deskIcons} />
          ))}
        </div>
        <div className="flex gap-5">
          <FooterLogoLayout>
            <p className="text-[.625rem] text-white">Powered by</p>
            <img
              className="w-[4.1875rem] h-[1.5625rem]"
              src={LogoVtex}
              alt="vtex grey logo"
            />
          </FooterLogoLayout>
          <FooterLogoLayout>
            <p className="text-[.625rem] text-white">Developed by</p>
            <img
              className="w-[7.375rem] h-[1.8125rem]"
              src={MaeztraLogo}
              alt="maeztra grey logo"
            />
          </FooterLogoLayout>
        </div>
      </div>
    </section>
  );
}

export default FooterDesktop;
