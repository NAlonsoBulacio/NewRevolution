import React from "react";
import lambo from "../../assets/imagenes/lambo.webp";
import marketing from "../../assets/imagenes/Marketing-icon.webp";
import version1 from "../../assets/imagenes/Version-1.webp";
const Pilares = ({ david }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-wrap justify-center items-center space-y-8 py-10">
        <div className="w-full flex flex-wrap justify-center items-center  space-y-6">
          {david ? (
            ""
          ) : (
           ""
          )}
          {/* <p className="text-gray-300 text-xl text-center poppins-regular">
            Estos son nuestros 3 pilares fundamentales
          </p> */}
          <div className="w-full flex justify-center ">
            <div className="w-3/5">
              <hr className=" border-[1.5px] border-[#F59800]" />
            </div>
          </div>
        </div>

        {/* Primer Pilar */}
        {david ? (
          <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
            <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
              <div className="w-full flex lg:hidden items-center overflow-hidden rounded-lg  mb-2">
                <img
                  className="w-full object-cover object-center"
                  src={version1}
                  alt=""
                />
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular text-lg text-[#F59800]">
                  N° 1 | La Habilidad Adecuada
                </p>
              </div>
              <div className="w-full mt-4">
                <p className="poppins-semibold text-4xl text-gray-100">
                  Trading
                </p>
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular font-bold text-lg text-gray-200">
                <span className="font-bold"> Concentra tus esfuerzos en una habilidad rentable y
                  transformadora. </span>
                </p>
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular text-lg text-gray-200">
                  Así comenzamos en 2018, aprendiendo trading desde cero. Tras
                  enfrentar altibajos, logramos ser rentables y vivir de esta
                  habilidad.
                </p>
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular text-lg text-gray-200">
                Hoy, <span className="font-bold">6 años después</span>, somos la <span className="font-bold">academia de trading líder en Latinoamérica</span>, con más de <span className="font-bold">22,240 alumnos</span> y cientos de <span className="font-bold">casos de éxito</span> que respaldan nuestro valor y compromiso.
                </p>
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular text-lg text-gray-200">
                Quiero que seas parte de este cambio!
                </p>
              </div>
            </div>
            <div className="w-full  lg:w-[40%] hidden lg:flex items-center overflow-hidden rounded-lg">
              <img
                className="w-full object-cover object-center"
                src={version1}
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
            <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
              <div className="w-full flex lg:hidden items-center overflow-hidden rounded-lg  mb-2">
                <img
                  className="w-full object-cover object-center"
                  src={version1}
                  alt=""
                />
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular text-lg text-[#F59800]">
                  N° 1 | La Habilidad Adecuada
                </p>
              </div>
              <div className="w-full mt-4">
                <p className="poppins-semibold text-4xl text-gray-100">
                  Trading
                </p>
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular font-bold text-lg text-gray-200">
                <span className="font-bold"> Concentra tus esfuerzos en una habilidad rentable y
                  transformadora. </span>
                </p>
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular text-lg text-gray-200">
                  Así comenzamos en 2018, aprendiendo trading desde cero. Tras
                  enfrentar altibajos, logramos ser rentables y vivir de esta
                  habilidad.
                </p>
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular text-lg text-gray-200">
                Hoy, <span className="font-bold">6 años después</span>, somos la <span className="font-bold">academia de trading líder en Latinoamérica</span>, con más de <span className="font-bold">22,240 alumnos</span> y cientos de <span className="font-bold">casos de éxito</span> que respaldan nuestro valor y compromiso.
                </p>
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular text-lg text-gray-200">
                Quiero que seas parte de este cambio!
                </p>
              </div>
            </div>
            <div className="w-full  lg:w-[40%] hidden lg:flex items-center overflow-hidden rounded-lg">
              <img
                className="w-full object-cover object-center"
                src={version1}
                alt=""
              />
            </div>
          </div>
        )}
        {/* Segundo Pilar */}
        {david ? (
          ""
        ) : (
         ""
        )}

        {/* Tercer Pilar */}
        {david ? (
          ""
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Pilares;
