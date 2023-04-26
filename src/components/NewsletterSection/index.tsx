import { toast } from "react-toastify";

function NewsletterSection() {
  return (
    <section className="mt-10 bg-[#FAFAFA] py-6 flex flex-col items-center gap-2">
      <h4 className="font-bold text-[#353535] text-2xl text-center">
        Recebe Nossa Newsletter
      </h4>
      <form
        className="flex gap-4"
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
          className="border border-black rounded pl-6 w-[12.75rem] text-[#353535] placeholder:text-[#353535]"
          type="email"
          name=""
          id=""
          placeholder="Digite seu e-mail"
          required
        />
        <button
          type="submit"
          className="text-sm font-bold bg-[#FAA500] w-[4.75rem] text-center rounded py-1 text-white"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default NewsletterSection;
