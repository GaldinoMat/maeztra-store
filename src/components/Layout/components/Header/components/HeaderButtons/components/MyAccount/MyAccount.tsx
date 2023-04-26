import ButtonLayout from "../..";
import IconUser from "../../../../../../../../assets/icon-user.svg";

function MyAccount() {
  return (
    <ButtonLayout>
      <img className="md:w-8 md:h-4" src={IconUser} alt="small user icon" />
      <p className="hidden lg:block lg:text-sm lg:text-[#353535]">Minha Conta</p>
    </ButtonLayout>
  );
}

export default MyAccount;
