import SiteLogo from "../../../../../../assets/logo.svg";

function Logo() {
  return (
    <section className="mr-auto ml-5">
      <a href="/">
        <img
          className="md:w-[9.1875rem] h-[1.125rem]"
          src={SiteLogo}
          alt="maeztra site logo"
        />
      </a>
    </section>
  );
}

export default Logo;
