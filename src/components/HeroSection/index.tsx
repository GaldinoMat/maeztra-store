import { useEffect, useState } from "react";
import Carroussel from "../Carroussel";
import { HeroArray } from "../utils/homeUtils";
import Hero from "./components/Hero";
import { useIsMobile } from "../../hooks/useIsMobile";

function HeroSection() {
  const [arrowPos, setArrowPos] = useState({
    left: 0,
    right: 0,
  });

  const { isDesktop } = useIsMobile();

  useEffect(() => {
    if (isDesktop) {
      const newPos = {
        left: 160,
        right: 160,
      };
      setArrowPos(newPos);
    }
  }, [isDesktop]);

  return (
    <Carroussel leftArrowPos={arrowPos.left} rightArrowPos={arrowPos.right}>
      {HeroArray.map((hero) => (
        <Hero
          AnchorText={hero.AnchorText}
          mobileImageSRC={hero.mobileImageSRC}
          Text={hero.Text}
          TitleText={hero.TitleText}
          key={hero.TitleText}
          desktopImageSRC={hero.desktopImageSRC}
        />
      ))}
    </Carroussel>
  );
}

export default HeroSection;
