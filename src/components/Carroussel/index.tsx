import { Children, ReactNode, useRef, useState } from "react";
import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";

interface CarrousselProps {
  children: ReactNode;
  hide?: boolean;
  gap?: boolean;
}

function Carroussel({ children, hide, gap }: CarrousselProps) {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const dragSlider = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    const { current } = dragSlider;

    if (current !== null) {
      if (direction === "left") {
        current.scrollLeft -= current.offsetWidth;
        setCurrentSliderIndex(currentSliderIndex - 1);
      } else {
        current.scrollLeft += current.offsetWidth;
        setCurrentSliderIndex(currentSliderIndex + 1);
      }
    }
  };

  return (
    <div className="relative">
      {!hide && (
        <button
          className="block absolute top-1/2 left-0 z-10 h-12 px-3 text-3xl"
          onClick={() => {
            handleClick("left");
          }}
        >
          <img src={LeftArrow} alt="black left arrow" />
        </button>
      )}
      <div
        className={`flex overflow-x-auto scroll-smooth h-auto ${
          gap ? "gap-4 md:gap-3" : ""
        } no-scrollbar`}
        ref={dragSlider}
      >
        {children}
        {!hide && (
          <div className="absolute bottom-4 left-0 right-0 mx-auto w-fit flex gap-4">
            {Children.count(children)
              ? Children.map(children, (_child, index) => (
                  <span
                    className={`border border-[#FAA500] w-2 h-2 block rounded-full transition-all ${
                      index === currentSliderIndex ? "bg-[#FAA500]" : ""
                    }`}
                  />
                ))
              : null}
          </div>
        )}
      </div>
      {!hide && (
        <button
          className="block absolute top-1/2 right-0 z-10 h-12 px-3 text-3xl"
          onClick={() => {
            handleClick("right");
          }}
        >
          <img src={RightArrow} alt="black right arrow" />
        </button>
      )}
    </div>
  );
}

export default Carroussel;
