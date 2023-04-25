import ButtonLayout from "../..";
import MinicartLogo from "../../../../../../../../assets/Minicart.svg";

function Minicart() {
  return (
    <ButtonLayout>
      <img src={MinicartLogo} alt="small bag icon" />
      <p className="hidden lg:block">Meu Carrinho</p>
    </ButtonLayout>
  );
}

export default Minicart;
