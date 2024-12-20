import React from "react";
import "./AnimatedButton.css";
import { FaWhatsapp } from "react-icons/fa6";
const AnimatedButtonWpp = ({ wppUrl }) => {
  const handleWppButton = ({}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "MetaCompleteRegristrationEvent",
      eventCategory: "CompleteRegistration",
      eventAction: "Submit",

      externalID: localStorage.getItem("externalID"),
    });
    window.location.href = wppUrl;
  };
  return (
    <button
      onClick={handleWppButton}
      className="w-full lg:w-2/4 animated-button-wpp text-xl border-[2px] border-green-500"
    >
      <span className="text-lg lg:text-2xl flex justify-center items-center gap-x-2">
        <FaWhatsapp />
        RESERVA TU CUPO
      </span>
    </button>
  );
};

export default AnimatedButtonWpp;
