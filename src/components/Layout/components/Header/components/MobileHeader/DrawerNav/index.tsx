import MyAccount from "../../HeaderButtons/components/MyAccount/MyAccount";
import MenuLinks from "../../MenuLinks";

export interface DrawerTypes {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}

function NavDrawer({ isDrawerOpen, setIsDrawerOpen }: DrawerTypes) {
  return (
    <nav
      className={`fixed h-screen bg z-20 bottom-0 left-0 ${
        isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <section
        className={`fixed flex flex-col justify-between h-full w-3/4 bg-white p-5 z-10 transition-all ${
          isDrawerOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <MenuLinks />
        <MyAccount />
      </section>
      <section
        className={`bg-black w-screen z-20 h-screen transition-all ${
          isDrawerOpen ? "opacity-25" : "opacity-0"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />
    </nav>
  );
}

export default NavDrawer;
