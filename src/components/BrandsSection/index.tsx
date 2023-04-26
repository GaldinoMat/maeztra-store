import Carroussel from "../Carroussel";
import CarrousselItemWrapper from "../Carroussel/components/CarrousselItemWrapper";
import { brandsArray } from "../utils/homeUtils";

function BrandsSection() {
  return (
    <section className="mt-10 md:mt-[4.625rem]">
      <h2 className="text-center text-2xl font-bold text-[#353535] mb-[1.3125rem]">
        Marcas Parceiras
      </h2>
      <Carroussel center hide gap padding>
        {brandsArray.map((brand) => (
          <CarrousselItemWrapper
            isFirst={brand.isFirst}
            isLast={brand.isLast}
            key={brand.src}
          >
            <img
              className="min-w-[18.625rem] md:min-w-[14.75rem] tabletLG:min-w-[15.75rem]"
              src={brand.src}
              alt="brand image"
            />
          </CarrousselItemWrapper>
        ))}
      </Carroussel>
    </section>
  );
}

export default BrandsSection;
