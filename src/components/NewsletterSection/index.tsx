import { toast } from "react-toastify";

function NewsletterSection() {
  return (
    <section className="mt-10 md:mt-20 bg-[#FAFAFA] py-6 flex flex-col md:flex-row md:justify-center items-center gap-2 md:gap-4">
      <h4 className="font-bold text-[#353535] md:text-[#000000] text-2xl text-center">
        Recebe Nossa Newsletter
      </h4>
      <form
        className="flex gap-4 md:gap-0"
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
          className="border border-black rounded md:rounded-br-none md:rounded-tr-none md:border-r-0 pl-6 w-[12.75rem] md:w-60 lg:w-[31.25rem] text-[#353535] placeholder:text-[#353535]"
          type="email"
          name="newsletterEmailInputSection"
          id="newsletterEmailInputSection"
          placeholder="Digite seu e-mail"
          required
        />
        <button
          type="submit"
          className="text-sm font-bold bg-[#FAA500] w-[4.75rem] text-center rounded py-1 md:h-10 px-6 md:w-[7.5rem] lg:w-[8.1875rem] text-white"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default NewsletterSection;
