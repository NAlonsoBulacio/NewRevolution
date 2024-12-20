import React from "react";
import logo from "../../assets/logo/logo_blanco-re.png";

const Footer = () => {
  return (
    <div>
      <div className="w-screen h-14 lg:h-20  flex justify-center items-center py-4">
        <img className="w-14 lg:w-20" src={logo} alt="logo" />
      </div>
      <div className="text-center mb-10">
        <a
          href="/politicas-de-privacidad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-200"
        >
          Política de Privacidad
        </a>
      </div>
    </div>
  );
};

export default Footer;
