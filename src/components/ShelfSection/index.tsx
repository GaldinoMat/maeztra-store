import Carroussel from "../Carroussel";

function ShelfSection() {
  return (
    <section className="mt-6">
      <h2 className="text-center text-2xl font-bold text-[#353535] mb-[1.3125rem]">
        As Mais Pedidas
      </h2>
      <Carroussel hide>
        <div className="flex flex-col">
          <div></div>
        </div>
      </Carroussel>
    </section>
  );
}

export default ShelfSection;
