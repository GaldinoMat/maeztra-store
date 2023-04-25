import { DrawerTypes } from "../DrawerNav";

function DrawerButton({ setIsDrawerOpen, isDrawerOpen }: DrawerTypes) {
  return (
    <button
      onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      className="h-10 w-10 rounded flex flex-col gap-[.375rem] justify-center items-center group relative"
    >
      <span
        aria-hidden="true"
        className="h-[.125rem] w-6 rounded-full bg-black transition ease transform duration-300"
      ></span>
      <span
        aria-hidden="true"
        className="h-[.125rem] w-6 rounded-full bg-black transition ease transform duration-300"
      ></span>
      <span
        aria-hidden="true"
        className="h-[.125rem] w-6 rounded-full bg-black transition ease transform duration-300"
      ></span>
    </button>
  );
}

export default DrawerButton;
