import React, { useEffect, useState } from "react";
import "./ModalButton.css";
import { FaWhatsapp } from "react-icons/fa6";

const ModalButton = ({ calendlyPage }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > 1 * windowHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  return (
    <button
      onClick={scrollToTop} // Llama a la función que desplaza la página hacia arriba
      className={`fixed-button w-full lg:w-full animated-button-wpp text-xl border-[2px] border-green-500 ${
        showButton ? "show" : ""
      }`}
    >
     
     <span className="text-lg lg:text-2xl flex justify-center items-center gap-x-2"><FaWhatsapp />RESERVA TU CUPO</span>
    </button>
  );
};

export default ModalButton;
