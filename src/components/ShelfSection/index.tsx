import Carroussel from "../Carroussel";
import CarrousselItemWrapper from "../Carroussel/components/CarrousselItemWrapper";
import { productArray } from "../utils/homeUtils";
import ProductCard from "./ProductCard";

function ShelfSection() {
  return (
    <section className="mt-6">
      <h2 className="text-center text-2xl font-bold text-[#353535] mb-[1.3125rem]">
        As Mais Pedidas
      </h2>
      <Carroussel hide gap>
        {productArray.map((product) => (
          <CarrousselItemWrapper
            isFirst={product.isFirst}
            isLast={product.isLast}
            key={product.productPrice}
          >
            <ProductCard
              productPrice={product.productPrice}
              productTitle={product.productTitle}
              productAlt={product.productAlt}
              productDesc={product.productDesc}
              productSRC={product.productSRC}
              productSKUs={product.productSKUs}
            />
          </CarrousselItemWrapper>
        ))}
      </Carroussel>
    </section>
  );
}

export default ShelfSection;
