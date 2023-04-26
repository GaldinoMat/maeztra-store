import ButtonLayout from "../..";
import MinicartLogo from "../../../../../../../../assets/Minicart.svg";

function Minicart() {
  return (
    <ButtonLayout border>
      <img className="md:w-4 md:h-4" src={MinicartLogo} alt="small bag icon" />
      <p className="hidden lg:block lg:text-sm lg:text-[#353535]">Meu Carrinho</p>
    </ButtonLayout>
  );
}

export default Minicart;
