import Carroussel from "../Carroussel";
import { brandsArray } from "../utils/homeUtils";

function BrandsSection() {
  return (
    <section className="mt-10">
      <h2 className="text-center text-2xl font-bold text-[#353535] mb-[1.3125rem]">
        Marcas Parceiras
      </h2>
      <Carroussel hide gap>
        {brandsArray.map((brand) => (
          <img
            className={`min-w-[18.625rem] ${
              brand.isFirst
                ? "ml-[1.9375rem]"
                : brand.isLast
                ? "mr-[1.9375rem]"
                : ""
            }`}
            src={brand.src}
            alt="brand image"
            key={brand.src}
          />
        ))}
      </Carroussel>
    </section>
  );
}

export default BrandsSection;
