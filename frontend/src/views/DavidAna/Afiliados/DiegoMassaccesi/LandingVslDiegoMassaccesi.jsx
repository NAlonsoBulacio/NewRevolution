import React from "react";
 import TitleAndVideo from "../../../../components/TitleAndVideo/TitleAndVideo";
import logo from "../../../../assets/logo/logo_blanco-re.png";
import Footer from "../../../../components/Footer/Footer";
import ModalButton from "../../../../components/ModalButton/ModalButton";
import History from "../../../../components/History/History";
import Actually from "../../../../components/Actually/Actually";
import Pilares from "../../../../components/Pilares/Pilares";
import MissionAndResult from "../../../../components/MissionAndResult/MissionAndResult";
import PresentProgram from "../../../../components/PresentProgram/PresentProgrtam";
import Gifts from "../../../../components/Gifts/Gifts";
import OfferSection from "../../../../components/OfferSection/OfferSection"
import background2 from "../../../../assets/background2.png";
 

import img1 from "../../../../assets/david_ana/1.webp";
import img2 from "../../../../assets/david_ana/2.webp";
import img3 from "../../../../assets/david_ana/3.webp";
import img4 from "../../../../assets/david_ana/4.webp";

const LandingVslDiegoMassaccesi = () => {
  
  const historyPart1 = [
    "Comencé en el mundo de las inversiones digitales de la peor manera. Fui víctima de estafas, perdí dinero en opciones binarias, y tuve malas experiencias con bots de trading. ",
    "Lejos de rendirme, decidí aprender de manera real a ganar dinero por internet. Invertí en cursos, pagué miles de dólares en academias de trading, y me rodeé de los entornos correctos.",
  ]
  
  const historyPart2 = [
    "Hace poco más de un año, descubrí Revolution. Lo primero que hice fue visitar sus oficinas y en agosto de 2023, realicé mi primera transmisión en vivo con Cristian Díaz.",
    "Desde entonces, he obtenido resultados consistentes en trading, mes tras mes.",
  ]
  
  const historyPart3 = [
    "Puedo decir que mi <strong>vida</strong> cambió completamente.",
    "Hoy, me rodeo de emprendedores de Argentina y Latinoamérica, personas que generan entre $15,000 y $50,000 USD mensuales, y juntos, seguimos creciendo, probando nuevas oportunidades, y cambiando nuestras vidas.",
  ]
  
  const actually = [
    
    "He generado más de $350,000 USD gracias al trading y al marketing digital.",
    "Actualmente, genero más de $7,000 USD mensuales.",
    "Puedo aportarles a personas que son como yo.",
    "Y ahora seguramente te estarás preguntando, ¿cómo es que logré crecer tanto y tan rápido con Revolution? ",
   `Aquí te presento "los tres pilares" de este modelo de negocio que transformará tu vida...`,
  ]
    const historyData = [
     "David Ana",
      "Argentina",
      "2020 - 2024",
    ]

  const calendlyPage = "/diego-massaccesi/calendly";
  const historyImages = [img1, img2, img3, img4];
  //const isRegistered = localStorage.getItem("isRegistered") === "true";
  const path = "diego-massaccesi";
  const googleSheets = "https://script.google.com/macros/s/AKfycbwBU_RF6xEJWnLGOEoQifWzQxxJnCCrug8F28ALB6bHobcRLPY7XO-zpP4dlExF56-uAA/exec"
const wppLink = "https://wa.me/+5492236692597?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios"
const wppNumber = "+5492236692597"
  const data = {
  historyPart1,
  historyPart2,
  historyPart3,
  actually,
  historyData,
  calendlyPage,
  historyImages,
  googleSheets,
  wppLink,
  wppNumber
};
const background2Style = {
  backgroundImage: `url(${background2})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
return (
  <div className="flex flex-wrap justify-center overflow-hidden">
    <div className="bg-gray-900 py-4">
      <div className="w-screen h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-yellow-600">
        <img className="w-14 lg:w-20" src={logo} alt="logo" />
      </div>
          <div className="px-3 lg:px-14 xl:px-[9rem] pt-2 lg:pt-6">
            <TitleAndVideo video={"wpp"} calendlyPage={calendlyPage} data={data} />
          </div>
           <div className="px-3 lg:px-14 xl:px-[9rem] py-4 bg-gray-50 border-t-[#F59800] border-[2px]">
            <History
              historyData={historyData}
              historyImages={historyImages}
              historyPart1={historyPart1}
              historyPart2={historyPart2}
              historyPart3={historyPart3}
            />
          </div>
          <div style={background2Style} className="py-2">
            <div className="px-2 lg:px-14 xl:px-[9rem] py-4">
              <Actually historyPart3={historyPart3} actually={actually} img4={img4} />
              <Pilares />
              <MissionAndResult />
            </div>
            <PresentProgram />
            <Gifts calendlyPage={calendlyPage} />
            <OfferSection calendlyPageUrl={calendlyPage} />
          </div> 
    </div>
    <div className="bg-gray-900 py-4 border-t-[1px] border-yellow-600">
      <Footer />
    </div>
    <ModalButton calendlyPage={calendlyPage} />
  </div>
);
};

export default LandingVslDiegoMassaccesi;
