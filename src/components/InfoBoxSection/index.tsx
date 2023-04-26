import InfoBoxImage from "../../assets/infoImage.svg";
import InfoBoxDesktop from "../../assets/infoBoxDesktop.svg";
import { useIsMobile } from "../../hooks/useIsMobile";

function InfoBoxSection() {
  const { isMobile } = useIsMobile();

  return (
    <section className="px-[1.9375rem] flex flex-col md:flex-row gap-6 mt-6 md:mt-20">
      <div className="pr-4 md:w-1/3">
        <h4 className="font-bold text-2xl">Lorem ipsum</h4>
        <p className="font-normal text-base md:text-sm mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque .
        </p>
      </div>
      <div className="md:w-2/3">
        {isMobile ? (
          <img
            className="rounded w-full h-full"
            src={InfoBoxImage}
            alt="image of a girl in a yellow dress and yellow tinted glasses wearing a white cap sitting near a wall with exposed bricks"
          />
        ) : (
          <img
            className="rounded w-full h-full"
            src={InfoBoxDesktop}
            alt="image of a girl in a yellow dress and yellow tinted glasses wearing a white cap sitting near a wall with exposed bricks"
          />
        )}
      </div>
    </section>
  );
}

export default InfoBoxSection;
