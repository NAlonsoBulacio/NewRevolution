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
 

import img1 from "../../../../assets/fernando_damian/1.webp";
import img2 from "../../../../assets/fernando_damian/2.webp";
import img3 from "../../../../assets/fernando_damian/3.webp";
import img4 from "../../../../assets/fernando_damian/4.webp";

const LandingVslArianaRomeggio = () => {
  
  const historyPart1 = [
    "Soy Fernando Damián Migliano, tengo 41 años y soy instructor de musculación y culturismo. Desde los 18 años, siempre he sido un emprendedor independiente.",
    "Comencé vendiendo productos y luego expandí mis negocios a un kiosco y un local de ropa en Buenos Aires. Con el tiempo, me convertí en agente inmobiliario y adquirí propiedades en Miami.",
  ]
  
  const historyPart2 = [
    "En 2013, lancé una tienda de ropa online llamada 'Let Me Shine'. Luego, en 2023, descubrí Revolution a través de un anuncio en Facebook.",
    "En solo seis meses, ya estaba generando más de 500 USD al mes haciendo trading desde mi casa.",
    "Esto me llevó a formar parte del staff de Revolution, ayudando a más de 20 personas a transformar sus vidas y dejar sus empleos tradicionales."
  ]
  
  const historyPart3 = [
    "Hoy, después de 18 meses, genero un promedio de 10.000 USD al mes. ",
    "Revolution ha cambiado mi vida y ahora tengo la libertad financiera que siempre soñé.",
  ]
  const actually = [
   
  " Si estás buscando una oportunidad para cambiar tu vida, este es tu momento.",
    "Puedo cuidar de mí mismo, de mi familia, de mis amigos y, lo más importante…",
    "Puedo aportarles a personas que son como yo.",
    "Y ahora seguramente te estarás preguntando, ¿cómo es que este joven argentino creció tanto y tan rápido con Revolution?",
   ` Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`,
  ]
    const historyData = [
     "Fernando Migliano",
      "Buenos Aires",
      "2 años",
    ]

  const calendlyPage = "/ariana-romeggio/calendly";
  const historyImages = [img1, img2, img3, img4];
  //const isRegistered = localStorage.getItem("isRegistered") === "true";
  const path = "ariana-romeggio";
  const googleSheets = "https://script.google.com/macros/s/AKfycbzPXYJUVhkmAbg-cNQxfeA4fjz0SXB97KmhIs-ef1oGs7DWqhYqMWGt8p3hov9hyYNx/exec"
const wppLink = "https://wa.me/+5491133456592?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios"
const wppNumber = "+5491133456592"
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

export default LandingVslArianaRomeggio;
