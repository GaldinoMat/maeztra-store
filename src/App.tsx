import Carroussel from "./components/Carroussel";
import Hero from "./components/Hero";
import HeroBanner from "./assets/HeroBanner.svg";

function App() {
  const HeroArray = [
    {
      Text: "Confiras os melhores looks para combinar com você nesse Outono",
      TitleText: "Promoções de Outono",
      imageSRC: HeroBanner,
      AnchorLink: "/",
      AnchorText: "Conferir",
    },
    {
      Text: "Confiras os melhores looks para combinar com você nesse Outono",
      TitleText: "Promoções de Verão",
      imageSRC: HeroBanner,
      AnchorLink: "/",
      AnchorText: "Conferir",
    },
    {
      Text: "Confiras os melhores looks para combinar com você nesse Outono",
      TitleText: "Promoções de Inverno",
      imageSRC: HeroBanner,
      AnchorLink: "/",
      AnchorText: "Conferir",
    },
  ];

  return (
    <>
      <Carroussel>
        {HeroArray.map((hero) => (
          <Hero
            AnchorText={hero.AnchorText}
            imageSRC={hero.imageSRC}
            Text={hero.Text}
            TitleText={hero.TitleText}
            key={hero.TitleText}
          />
        ))}
      </Carroussel>
    </>
  );
}

export default App;
