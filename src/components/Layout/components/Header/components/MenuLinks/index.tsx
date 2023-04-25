function MenuLinks() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
      {[
        "Novidades",
        "Vestidos",
        "Roupas",
        "Sapatos",
        "Lingerie",
        "Acessórios",
        "OUTLET",
      ].map((title) => (
        <p key={title} className="text-sm font-medium">
          {title}
        </p>
      ))}
    </div>
  );
}

export default MenuLinks;
