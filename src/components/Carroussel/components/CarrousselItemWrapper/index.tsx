import { ReactNode } from "react";

interface CarrousselItemWrapperProps {
  children: ReactNode;
  desktopMargin?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

function CarrousselItemWrapper({
  children,
  isFirst,
  isLast,
  desktopMargin,
}: CarrousselItemWrapperProps) {
  return (
    <div
      className={`${
        isFirst
          ? `ml-[1.9375rem] ${desktopMargin ? "md:ml-4" : "md:ml-0"}`
          : isLast
          ? `mr-[1.9375rem] ${desktopMargin ? "md:mr-4" : "md:mr-0"}`
          : ""
      }`}
    >
      {children}
    </div>
  );
}

export default CarrousselItemWrapper;
