import { useState } from "react";
import Minicart from "../HeaderButtons/components/Minicart/Minicart";
import Search from "../HeaderButtons/components/Search/Search";
import DrawerButton from "./DrawerButton";
import NavDrawer from "./DrawerNav";
import Logo from "../Logo";

function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <section className="relative flex w-full items-center justify-between p-5 md:hidden">
      <DrawerButton
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Logo />
      <section className="flex gap-10">
        <Search />
        <Minicart />
      </section>
      <NavDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </section>
  );
}

export default MobileHeader;
