import { ReactNode } from "react";

interface CarrousselItemWrapperProps {
  children: ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}

function CarrousselItemWrapper({
  children,
  isFirst,
  isLast,
}: CarrousselItemWrapperProps) {
  return (
    <div
      className={`${
        isFirst ? "ml-[1.9375rem]" : isLast ? "mr-[1.9375rem]" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default CarrousselItemWrapper;
