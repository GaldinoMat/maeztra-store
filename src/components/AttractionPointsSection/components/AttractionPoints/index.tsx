interface AttractionPoints {
  imgSRC: string;
  AttractionTitle: string;
  AttractionText: string;
}

function AttractionPoints({
  imgSRC,
  AttractionTitle,
  AttractionText,
}: AttractionPoints) {
  return (
    <div className="flex items-center px-[1.625rem] h-16 py-[.875rem] gap-[1.3125rem] bg-[#EFEFEF] rounded min-w-[18.625rem] md:min-w-[14.75rem] tabletLG:min-w-[15.75rem] lg:min-w-[19.25rem]">
      <img src={imgSRC} alt="" className="max-w-none" />
      <div>
        <h4 className="font-bold text-sm">{AttractionTitle}</h4>
        <p className="text-xs">{AttractionText}</p>
      </div>
    </div>
  );
}

export default AttractionPoints;
