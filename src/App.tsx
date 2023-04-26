import HeroSection from "./components/HeroSection";
import AttractionPointsSection from "./components/AttractionPointsSection";
import BrandsSection from "./components/BrandsSection";
import ShelfSection from "./components/ShelfSection";
import InfoBoxSection from "./components/InfoBoxSection";
import NewsletterSection from "./components/NewsletterSection";
import AccordionSection from "./components/AccordionSection";
import NewsletterLayover from "./components/NewsletterLayover";
import { createPortal } from "react-dom";

function App() {
  return (
    <>
      <section>{createPortal(<NewsletterLayover />, document.body)}</section>
      <HeroSection />
      <AttractionPointsSection />
      <BrandsSection />
      <ShelfSection />
      <InfoBoxSection />
      <NewsletterSection />
      <AccordionSection />
    </>
  );
}

export default App;
