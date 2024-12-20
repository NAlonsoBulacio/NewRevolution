import React from "react";
import { FaCheck } from "react-icons/fa";
import CallToAction from "../CallToAction/CallToAction";
import rev from "../../assets/imagenes/rev2.webp";
import dubai from "../../assets/imagenes/Dunai-imagen.webp";
import mapa from "../../assets/imagenes/Mapa-icon.webp";
import rev3 from "../../assets/imagenes/rev3.webp";
const Gifts = ({ calendlyPage, david }) => {
  return (
    <div className="mt-10 text-gray-100 px-3 lg:px-0">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-6 poppins-bold text-balance">
        {david
          ? "Si cumplís con los 2 requisitos que se nombran en el video aplicarás a: "
          : "Si cumplís con los 2 requisitos que se nombran en el video aplicarás a: "}
      </h1>
      <p className="text-center mb-6">
        Para las primeras 100 personas que accedan al programa
      </p>
      <div className="flex flex-wrap justify-center px-0 lg:px-32">
        <div className="flex flex-wrap justify-left items-center  space-y-16 py-10">
          {david ? (
            <>
              {/* Regalo 1: Universidad Pública de Trading */}
              <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
                <div className="w-full lg:w-[100%]">
                  <p className="poppins-regular text-3xl">
                    <span className="text-[#F59800] font-bold">Regalo #1:</span>{" "}
                    <span className="font-bold">
                      Acceso a la Universidad Pública de Trading más grande de
                      Latinoamérica
                    </span>
                  </p>
                  <div className="flex items-start mt-4">
                    <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                    <p className="text-xl">
                      Obtén conocimientos exclusivos en trading con la guía de
                      expertos de la universidad más reconocida del sector.
                    </p>
                  </div>
                </div>
              </div>

              {/* Regalo 2: Revolution App */}
              <div className="flex flex-wrap justify-center items-center ">
                <div className="w-full lg:w-[100%] flex justify-center items-center overflow-hidden rounded-lg mb-2 lg:mb-0">
                  {/* <img
                    className="w-full object-cover object-center"
                    src={appImage}
                    alt="Revolution App"
                  /> */}
                </div>
                <div className="w-full lg:w-[100%]">
                  <p className="poppins-regular text-3xl">
                    <span className="text-[#F59800] font-bold">Regalo #2:</span>{" "}
                    <span className="font-bold">Acceso a Revolution App</span>
                  </p>
                  <div className="flex items-start mt-4">
                    <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                    <p className="text-xl">
                      Disfruta de más de 30 horas de contenido grabado para
                      mejorar tus habilidades y conocimientos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Regalo 3: Herramienta Semiautomática */}
              <div className="flex flex-wrap justify-center items-center ">
                <div className="w-full lg:w-[100%] flex justify-center items-center overflow-hidden rounded-lg mb-2 lg:mb-0">
                  {/* <img
                    className="w-full object-cover object-center"
                    src={toolImage}
                    alt="Herramienta Semiautomática"
                  /> */}
                </div>
                <div className="w-full lg:w-[100%]">
                  <p className="poppins-regular text-3xl">
                    <span className="text-[#F59800] font-bold">Regalo #3:</span>{" "}
                    <span className="font-bold">
                      Herramienta Semiautomática de Trading
                    </span>
                  </p>
                  <div className="flex items-start mt-4">
                    <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                    <p className="text-xl">
                      Canal de señales de alta efectividad para ayudarte en tus
                      operaciones diarias.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
            {/* Regalo 1: Universidad Pública de Trading */}
            <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
              <div className="w-full lg:w-[100%]">
                <p className="poppins-regular text-3xl">
                  <span className="text-[#F59800] font-bold">Regalo #1:</span>{" "}
                  <span className="font-bold">
                    Acceso a la Universidad Pública de Trading más grande de
                    Latinoamérica
                  </span>
                </p>
                <div className="flex items-start mt-4">
                  <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                  <p className="text-xl">
                    Obtén conocimientos exclusivos en trading con la guía de
                    expertos de la universidad más reconocida del sector.
                  </p>
                </div>
              </div>
            </div>

            {/* Regalo 2: Revolution App */}
            <div className="flex flex-wrap justify-center items-center ">
              <div className="w-full lg:w-[100%] flex justify-center items-center overflow-hidden rounded-lg mb-2 lg:mb-0">
                {/* <img
                  className="w-full object-cover object-center"
                  src={appImage}
                  alt="Revolution App"
                /> */}
              </div>
              <div className="w-full lg:w-[100%]">
                <p className="poppins-regular text-3xl">
                  <span className="text-[#F59800] font-bold">Regalo #2:</span>{" "}
                  <span className="font-bold">Acceso a Revolution App</span>
                </p>
                <div className="flex items-start mt-4">
                  <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                  <p className="text-xl">
                    Disfruta de más de 30 horas de contenido grabado para
                    mejorar tus habilidades y conocimientos.
                  </p>
                </div>
              </div>
            </div>

            {/* Regalo 3: Herramienta Semiautomática */}
            <div className="flex flex-wrap justify-center items-center ">
              <div className="w-full lg:w-[100%] flex justify-center items-center overflow-hidden rounded-lg mb-2 lg:mb-0">
                {/* <img
                  className="w-full object-cover object-center"
                  src={toolImage}
                  alt="Herramienta Semiautomática"
                /> */}
              </div>
              <div className="w-full lg:w-[100%]">
                <p className="poppins-regular text-3xl">
                  <span className="text-[#F59800] font-bold">Regalo #3:</span>{" "}
                  <span className="font-bold">
                    Herramienta Semiautomática de Trading
                  </span>
                </p>
                <div className="flex items-start mt-4">
                  <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                  <p className="text-xl">
                    Canal de señales de alta efectividad para ayudarte en tus
                    operaciones diarias.
                  </p>
                </div>
              </div>
            </div>
          </>
          )}

        </div>
      </div>
      <CallToAction david={david} calendlyPageUrl={calendlyPage} />
    </div>
  );
};

export default Gifts;
