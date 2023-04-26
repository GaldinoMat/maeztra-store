function SearchBar() {
  return (
    <form action="" className="flex w-[27rem] lg:w-[49.375rem]">
      <input
        className="w-full bg-[#EFEFEF] py-1 h-10 px-6  rounded-tl-[.625rem] rounded-bl-[.625rem]"
        type="text"
        name=""
        id=""
        placeholder="O Que Você Busca?"
      />
      <button
        type="button"
        className="text-sm font-normal bg-[#FAA500] text-center rounded py-1 h-10 px-6 w-[7.5rem] text-white"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
