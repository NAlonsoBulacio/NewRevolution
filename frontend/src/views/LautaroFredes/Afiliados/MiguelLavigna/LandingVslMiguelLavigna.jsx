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
 


import img1 from "../../../../assets/lautar_fredes/1.webp";
import img2 from "../../../../assets/lautar_fredes/2.jpg";
import img3 from "../../../../assets/lautar_fredes/3.webp";
import img4 from "../../../../assets/lautar_fredes/4.webp";

const LandingVslMiguelLavigna = () => {
  
  const historyPart1 = [
    "Todo empezó cuando yo tenía (19 años) y tenía una ambición muy grande por crecer pero las oportunidades que tenían eran muy pocas, más que un trabajo en comida rápida donde ganaba muy poco y trabajaba mucho.",
    "Estaba bastante frustrado porque creía que esa iba a hacer mi realidad por siempre, hasta que un día un amigo me invitó a una oportunidad digital si bien no se expresó mucho pero me dijo “Amigo tengo algo muy bueno para contarte, nos tenemos que juntar”…",
    "Me encontré con la oportunidad que estaba buscando, crecer sin límite y ganar por mi desempeño. Luego de desarrollarme como un experto en la industria del Network Marketing me encontré con Revolution en redes sociales, decidí ingresar a una presentación porque tenía mucha curiosidad y estaba con ganas de profundizar en el mundo del trading",
    "Luego de la presentación tome acción y comencé en Revolution el 10/02/2023",
]

const historyPart2 = [
    "Mientras estuve allí, aprendí muchísimo, hice amigos que estaban en la misma que yo y conocí personas que tenían libertad financiera",
    "Ganaban dinero con trading y por venta de afiliados todos los días, vivían en las mejores zonas de Argentina y se compraban ropa en las tiendas más caras, como si nada…",
    "Y todo esto mientras que yo era el que menos ganaba del círculo. Pero cambió mi perspectiva sobre cómo veía la vida.",
    "En (buenos aires), mis amigos salían de fiesta y eskabiaban todos los días… Y yo trabajaba de (cajero) y apenas ganaba (200 dólares por mes) Quería una vida diferente, quería ser más y sabía que podía.",
    "En Revolution generan ingresos en dólares todos los días con trading y afiliaciones y viven en las mejores zonas del país…",
]

const historyPart3 = [
    "Después de ingresar a Revolution algo cambió en mi. No era el mismo de antes...",
    "Quería una vida diferente, quería ser más y sabía que podía.",
    "Empecé a aprender y a trabajar y así pude generar mis primeros (500 dolares x mes)",
    "Mi familia no me apoyaba porque me veían distinto, mis amigos me molestaban",
    "Pero yo no quería volver a mi vida de antes, sabía que no era mi camino Todo esto fue en ( 2023 año en que empezó en Revolution) …"
]
const actually = [
  "Facturé más de (4000 dólares por mes) con Revolution, vivo en (en Nordelta) y tengo amigos que comparten los mismos objetivos.",
  "El dinero ya no es un problema.",
  "Puedo cuidar de mí mismo, de mi familia, de mis amigos y, lo más importante…",
  "Puedo aportarles a personas que son como yo.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que este joven argentino creció tanto y tan rápido con Revolution?",
  `Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`
]


  const historyData = ["Lautaro Fredes", "Argentina, Bs As", "8 años"];
  
  const calendlyPage = "/miguel-lavigna/calendly";
const historyImages = [ img1, img2, img3, img4]
    //const isRegistered = localStorage.getItem("isRegistered") === "true";
const path = "miguel-lavigna"
const googleSheets = "https://script.google.com/macros/s/AKfycbyZLJWfSHMs28Y2Rwyo9HUq4fBy7yvtUf5NvyT2AnWuq08x9Uhr7o4aaCjpPnPn2LO-cg/exec"
const wppLink = "https://wa.me/+5493413072451?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios"
const wppNumber = "+5493413072451"
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

export default LandingVslMiguelLavigna;
