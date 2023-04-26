import Carroussel from "../Carroussel";
import CarrousselItemWrapper from "../Carroussel/components/CarrousselItemWrapper";
import { brandsArray } from "../utils/homeUtils";

function BrandsSection() {
  return (
    <section className="mt-10">
      <h2 className="text-center text-2xl font-bold text-[#353535] mb-[1.3125rem]">
        Marcas Parceiras
      </h2>
      <Carroussel hide gap>
        {brandsArray.map((brand) => (
          <CarrousselItemWrapper
            isFirst={brand.isFirst}
            isLast={brand.isLast}
            key={brand.src}
          >
            <img
              className="min-w-[18.625rem]"
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
