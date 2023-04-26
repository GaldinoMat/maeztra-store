import { toast } from "react-toastify";
import Envelope from "../../../../assets/newsletter-mail-icon.svg";
import Plane from "../../../../assets/plane.svg";
import ModalImage from "../../../../assets/modalImage.svg";

interface NewsletterModalProps {
  setModalOpen: (bool: boolean) => void;
  modalOpen: boolean;
}

function NewsletterModal({ setModalOpen, modalOpen }: NewsletterModalProps) {
  return (
    <div
      className={`fixed top-0 bottom-0 w-screen ${
        modalOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      } transition-all`}
    >
      <button
        className="text-white absolute top-36 right-9 md:top-[17rem] md:right-12 lg:top-[13rem] lg:right-[38rem]"
        onClick={() => {
          localStorage.setItem("modalClosed", "true");
          setModalOpen(false);
        }}
      >
        Fechar
      </button>
      <div className="w-[18.625rem] h-[19.1875rem] md:w-[45rem] md:max-w-[53rem] md:h-[24.6rem] mx-auto absolute left-0 right-0 top-1/4 bg-white md:flex">
        <div className="hidden md:block w-1/2">
          <img
            src={ModalImage}
            className="w-full h-full"
            alt="a fit man, with black workout clothes tying his orange sneakers"
          />
        </div>
        <div className="py-6 px-5 md:flex md:flex-col md:justify-center">
          <div className="flex flex-col items-center gap-4 px-2">
            <img
              className="w-7 h-[1.8125rem]"
              src={Envelope}
              alt="black outline envelope icon"
            />
            <p className="uppercase text-xs font-normal text-[#464B54]">
              Bem Vindo à MAEZTRA
            </p>
            <p className="text-[#787D83] text-center text-base">
              Receba em Primeira mão{" "}
              <strong>desconto e ofertas exclusivas</strong>{" "}
            </p>
          </div>
          <form
            className="flex flex-col gap-3 mt-[1.625rem]"
            onSubmit={(e) => {
              e.preventDefault();

              toast.success("Obrigado por se cadastrar!", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
          >
            <input
              className="border border-[#C4C4C4] rounded p-[.625rem] text-[#353535] placeholder:text-[#353535]"
              type="email"
              name="newsletterEmailModal"
              id="newsletterEmailModal"
              placeholder="Digite seu email"
              required
            />
            <button
              className="text-sm flex items-center justify-center gap-2 font-bold bg-[#FAA500] text-center rounded py-[.625rem] text-white"
              type="submit"
            >
              <p>Enviar</p>
              <img src={Plane} alt="black outline paper plane icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsletterModal;
