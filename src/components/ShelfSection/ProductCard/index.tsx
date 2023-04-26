interface ProductCardProps {
  productSRC: string;
  productAlt: string;
  productPrice: number;
  productTitle: string;
  productDesc: string;
  productSKUs: string[];
}

function ProductCard({
  productDesc,
  productPrice,
  productSRC,
  productTitle,
  productAlt,
  productSKUs,
}: ProductCardProps) {
  return (
    <div className="flex flex-col min-w-[19.25rem] h-[38.5rem]">
      <div>
        <img src={productSRC} alt={productAlt} />
      </div>
      <div className="grid gap-3 px-[1.6875rem] flex-auto mt-2">
        <div className="flex gap-2">
          {productSKUs.map((sku) => (
            <span
              style={{ backgroundColor: sku }}
              className="w-[1.6875rem] h-[1.6875rem] rounded"
            />
          ))}
        </div>
        <div>
          <p className="font-bold text-xl">RS {productPrice}</p>
          <p className="font-normal text-base text-[#353535] mt-[.125rem]">
            {productTitle}
          </p>
          <p className="font-normal text-xs text-[#353535] mt-2">
            {productDesc}
          </p>
        </div>
        <div className="self-end">
          <button className="text-base font-normal text-white bg-[#FAA500] w-full text-center rounded py-3">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
