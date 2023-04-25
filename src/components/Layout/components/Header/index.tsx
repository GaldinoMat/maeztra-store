import { useState } from "react";
import DrawerButton from "./components/MobileHeader/DrawerButton";
import MenuLinks from "./components/MenuLinks";
import NavDrawer from "./components/MobileHeader/DrawerNav";
import SiteLogo from "../../../../assets/logo.svg";
import Search from "./components/HeaderButtons/components/Search/Search";
import Minicart from "./components/HeaderButtons/components/Minicart/Minicart";
import TipBar from "./components/TipBar";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header className="">
      <TipBar />
      <div className="relative flex w-full items-center justify-between p-5 lg:mx-auto lg:max-w-[73rem] lg:py-16 lg:px-5">
        <section className="lg:hidden">
          <DrawerButton
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </section>
        <section className="mr-auto ml-5 lg:mx-0 w-[6.875rem]">
          <img src={SiteLogo} alt="maeztra site logo" />
        </section>
        <section className="flex gap-10">
          <Search />
          <Minicart />
        </section>
        <section className="hidden lg:block">
          <MenuLinks />
        </section>
        <NavDrawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </div>
    </header>
  );
}

export default Header;
