import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Calendly from "../../components/Calendly/Calendly";
import logo from "../../assets/logo/logo_blanco-re.png";
import { useLocation } from "react-router-dom";
import History from "../../components/History/History";
import Actually from "../../components/Actually/Actually";
import Pilares from "../../components/Pilares/Pilares";
import MissionAndResult from "../../components/MissionAndResult/MissionAndResult";
import PresentProgram from "../../components/PresentProgram/PresentProgrtam";
import Gifts from "../../components/Gifts/Gifts";
import OfferSection from "../../components/OfferSection/OfferSection";
import background2 from "../../assets/background2.png";
import ModalButton from "../../components/ModalButton/ModalButton";
const CalendlyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <div
      className="bg-cover bg-gray-900  bg-no-repeat bg-top bg-fixed h-full py-2"
    >
     <div className="w-screen h-24  py- flex justify-center items-center border-b-[1px] border-yellow-600">
        <img className="w-14 lg:w-20" src={logo} alt="logo" />
      </div>
      <div className="text-center py-4 max-w-[1223px] mx-auto">
        <h1 className="poppins-medium text-yellow-500 text-2xl md:text-5xl font-extrabold mb-2 mx-4 md:mx-0">
        Estás a un paso de agendar tu llamada...
        </h1>
        <h3 className="poppins-regular text-gray-300 text-lg md:text-2xl mb-2 mx-6 my-2 md:my-0 md:mx-0">
        Selecciona un día y horario que te quede cómodo.
Una vez agendes, un miembro de la comunidad de Revolution se pondrá en contacto contigo por WhatsApp para confirmar la reunión!
        </h3>
        <div className="h-[866px] lg:h-auto">
        <Calendly />
        </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default CalendlyPage;
