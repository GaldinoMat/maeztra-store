import InfoBoxImage from "../../assets/infoImage.svg";

function InfoBoxSection() {
  return (
    <section className="px-[1.9375rem] flex flex-col gap-6 mt-6">
      <div className="pr-4">
        <h4 className="font-bold text-2xl">Lorem ipsum</h4>
        <p className="font-normal text-base mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque .
        </p>
      </div>
      <div>
        <img
        className="rounded"
          src={InfoBoxImage}
          alt="image of a girl in a yellow dress and yellow tinted glasses wearinga white cap sitting near a wall with exposed bricks"
        />
      </div>
    </section>
  );
}

export default InfoBoxSection;
