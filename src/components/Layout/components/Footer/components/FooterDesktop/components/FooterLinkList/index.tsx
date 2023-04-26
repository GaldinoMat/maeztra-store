interface FooterLinkList {
  LinkListTitle: string;
  Links: string[];
}

function FooterLinkList({ LinkListTitle, Links }: FooterLinkList) {
  return (
    <div>
      <h5 className="font-bold text-base text-[#353535] mb-6">
        {LinkListTitle}
      </h5>
      <ul className="flex flex-col gap-6">
        {Links.map((link) => (
          <li className="text-xs">
            <a href="/maeztra-store/" key={link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinkList;
