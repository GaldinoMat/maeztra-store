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
      <div className="absolute top-[3.9375rem] text-white flex flex-col gap-6 w-56 left-0 right-0 mx-auto">
        <h2 className="font-bold text-[1.875rem]">{TitleText}</h2>
        <p className="text-sm">{Text}</p>
        <a
          className="text-sm font-bold bg-[#FAA500] w-[4.75rem] text-center rounded py-1"
          href={AnchorLink}
        >
          {AnchorText}
        </a>
      </div>
    </section>
  );
}

export default Hero;
