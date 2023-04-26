import { useState } from "react";
import PlusSign from "../../../../assets/plus.svg";

interface AccordionProps {
  title: string;
  text: string;
}

function Accordion({ text, title }: AccordionProps) {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <div>
      <div className="">
        <button
          className="w-full flex justify-between items-center"
          type="button"
          onClick={() => setOpenAccordion(!openAccordion)}
        >
          <p className="font-bold text-base text-left text-[#353535]">
            {title}
          </p>
          <img
            src={PlusSign}
            alt="black plus sign"
            className={`${
              openAccordion ? "rotate-45" : "rotate-0"
            } transition-all`}
          />
        </button>
      </div>
      <div
        className={`${
          openAccordion ? "max-h-[31.25rem]" : "max-h-0"
        } overflow-hidden transition-all`}
      >
        <p className="text-sm font-normal mt-4">{text}</p>
      </div>
    </div>
  );
}

export default Accordion;
