import Carroussel from "../Carroussel";
import { AttractionArray } from "../utils/homeUtils";
import AttractionPoints from "./components/AttractionPoints";

function AttractionPointsSection() {
  return (
    <section className="mt-6">
      <h2 className="text-center font-bold text-[#353535] mb-[1.3125rem]">
        Porque comprar na Maeztra?
      </h2>
      <Carroussel hide gap>
        {AttractionArray.map((attractionPoint) => (
          <AttractionPoints
            imgSRC={attractionPoint.imgSRC}
            AttractionText={attractionPoint.AttractionText}
            AttractionTitle={attractionPoint.AttractionTitle}
            isFirst={attractionPoint.isFirst}
            isLast={attractionPoint.isLast}
          />
        ))}
      </Carroussel>
    </section>
  );
}

export default AttractionPointsSection;
