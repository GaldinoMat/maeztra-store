import Carroussel from "../Carroussel";
import { HeroArray } from "../utils/homeUtils";
import Hero from "./components/Hero";

function HeroSection() {
  return (
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
  );
}

export default HeroSection;
