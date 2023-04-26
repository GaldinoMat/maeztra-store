import ButtonLayout from "../..";
import Heart from "../../../../../../../../assets/heart.svg";

function Favorites() {
  return (
    <ButtonLayout>
      <img className="md:w-8 md:h-4" src={Heart} alt="small heart icon" />
      <p className="hidden lg:block lg:text-sm lg:text-[#353535]">
        Minha Conta
      </p>
    </ButtonLayout>
  );
}

export default Favorites;
