interface HeroProps {
  imageSRC: string;
  TitleText: string;
  Text: string;
  AnchorLink?: string;
  AnchorText: string;
}

function Hero({
  Text,
  TitleText,
  imageSRC,
  AnchorLink = "/",
  AnchorText,
}: HeroProps) {
  return (
    <section className="relative ">
      <img className="max-w-none w-screen" src={imageSRC} alt="hero banner" />
      <div className="absolute top-[3.9375rem] md:top-0 md:bottom-0 md:h-fit md:my-auto text-white flex flex-col gap-6 w-56 md:w-[25rem] left-0 right-0 mx-auto">
        <h2 className="font-bold text-[1.875rem] md:text-[2.5rem]">
          {TitleText}
        </h2>
        <p className="text-sm md:text-xl">{Text}</p>
        <a
          className="text-sm md:text-base font-bold bg-[#FAA500] w-[4.75rem] md:w-32 text-center rounded py-1 md:py-[.875rem]"
          href={AnchorLink}
        >
          {AnchorText}
        </a>
      </div>
    </section>
  );
}

export default Hero;
