import { useEffect, useState } from "react";
import NewsletterModal from "./components/NewsletterModal";

function NewsletterLayover() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const modalMemory = localStorage.getItem("modalClosed");

    console.log(modalMemory);

    if (!modalMemory) {
      setTimeout(() => {
        setModalOpen(true);
      }, 5000);
    }
  }, []);

  return (
    <div className="relative">
      <div
        className={`h-screen w-screen fixed bg-black top-0 ${
          modalOpen
            ? "opacity-60 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-all`}
      ></div>
      <NewsletterModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </div>
  );
}
export default NewsletterLayover;
