import Accordion from "./components/Accordion";

function AccordionSection() {
  return (
    <section className="px-[1.9375rem] flex flex-col gap-6 mt-10 md:mt-[2.6875rem]">
      <Accordion
        title="Informações"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque commodo facilisis. Nunc tincidunt vel risus ut fermentum. Nulla ex orci, molestie sit amet imperdiet."
      />
      <Accordion
        title="Minha Conta"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque commodo facilisis. Nunc tincidunt vel risus ut fermentum. Nulla ex orci, molestie sit amet imperdiet."
      />
      <Accordion
        title="Onde nos Encontrar"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque commodo facilisis. Nunc tincidunt vel risus ut fermentum. Nulla ex orci, molestie sit amet imperdiet."
      />
    </section>
  );
}

export default AccordionSection;
