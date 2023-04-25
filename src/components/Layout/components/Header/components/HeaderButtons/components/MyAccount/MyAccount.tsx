import ButtonLayout from "../..";
import IconUser from "../../../../../../../../assets/icon-user.svg";

function MyAccount() {
  return (
    <ButtonLayout>
      <img src={IconUser} alt="small user icon" />
      <p>Minha Conta</p>
    </ButtonLayout>
  );
}

export default MyAccount;
