import React from "react";
import { useHistory } from "react-router-dom";
import "./AnimatedButton.css";
import { FaWhatsapp } from "react-icons/fa6";

const AnimatedButtonDavid = ({ calendlyPage, data, cta }) => {
  const history = useHistory();
 
  const handleButtonClick = () => {
    history.push({
      pathname: calendlyPage,
      state: { data: data },
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  return (
    <button
      onClick={cta ? scrollToTop : handleButtonClick}
      className="w-full lg:w-2/4 animated-button-wpp text-xl border-[2px] border-green-500"
    >
       <span className="text-lg lg:text-2xl flex justify-center items-center gap-x-2">
        <FaWhatsapp />
        RESERVA TU CUPO
      </span>
    </button>
  );
};

export default AnimatedButtonDavid;
