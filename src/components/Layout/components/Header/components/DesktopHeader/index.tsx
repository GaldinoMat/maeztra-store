import Favorites from "../HeaderButtons/components/Favorites";
import Minicart from "../HeaderButtons/components/Minicart/Minicart";
import MyAccount from "../HeaderButtons/components/MyAccount/MyAccount";
import Logo from "../Logo";
import SearchBar from "./components/SearchBar";

function DesktopHeader() {
  return (
    <section className="relative flex w-full lg:mx-auto lg:px-36 items-center justify-between p-6 gap-5 lg:gap-16">
      <Logo />
      <SearchBar />
      <section className="flex gap-10">
        <MyAccount />
        <Favorites />
        <Minicart />
      </section>
    </section>
  );
}

export default DesktopHeader;
