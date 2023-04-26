import { Children, ReactNode, useRef, useState } from "react";
import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";

interface CarrousselProps {
  children: ReactNode;
  hide?: boolean;
  gap?: boolean;
  padding?: boolean;
  center?: boolean;
  leftArrowPos?: number;
  rightArrowPos?: number;
}

function Carroussel({
  children,
  hide,
  gap,
  padding,
  center,
  leftArrowPos = 0,
  rightArrowPos = 0,
}: CarrousselProps) {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const dragSlider = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    const { current } = dragSlider;

    if (current !== null) {
      if (direction === "left") {
        setCurrentSliderIndex((prevState: number) => {
          const newState = currentSliderIndex - 1;

          if (newState < 0) {
            return prevState;
          }

          current.scrollLeft -= current.offsetWidth;
          return newState;
        });
      } else {
        setCurrentSliderIndex((prevState: number) => {
          const newState = currentSliderIndex + 1;

          if (newState > Children.count(children) - 1) {
            return prevState;
          }

          current.scrollLeft += current.offsetWidth;
          return newState;
        });
      }
    }
  };

  return (
    <div
      className={`relative ${center && "lg:w-fit lg:mx-auto"} ${
        padding && "md:px-4"
      }`}
    >
      {!hide && (
        <button
          style={{ left: leftArrowPos }}
          className="block absolute top-1/2 z-10 h-12 px-3 text-3xl"
          onClick={() => {
            handleClick("left");
          }}
        >
          <img src={LeftArrow} alt="black left arrow" />
        </button>
      )}
      {!hide && (
        <button
          style={{ right: rightArrowPos }}
          className="block absolute top-1/2 z-10 h-12 px-3 text-3xl"
          onClick={() => {
            handleClick("right");
          }}
        >
          <img src={RightArrow} alt="black right arrow" />
        </button>
      )}
      <div
        className={`flex overflow-x-auto mx-auto scroll-smooth h-auto ${
          gap ? "gap-4" : ""
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
    </div>
  );
}

export default Carroussel;
