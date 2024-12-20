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
 


import img1 from "../../../../assets/marcelo_diaz/1.webp";
import img2 from "../../../../assets/marcelo_diaz/2.webp";
import img3 from "../../../../assets/marcelo_diaz/3.webp";
import img4 from "../../../../assets/marcelo_diaz/4.webp";

const LandingVslFlorencia = () => {
  
 const historyPart1 = [
  "Todo comenzó cuando, influenciado por mi <strong>hermano</strong>, <strong>Cristian Díaz</strong>, decidí asistir a una <strong>videoconferencia</strong>. Yo venía de una <strong>familia humilde</strong>, sin grandes <strong>oportunidades</strong> a la vista, pero con el <strong>deseo</strong> de crecer y cambiar mi <strong>realidad</strong>. En ese momento, me mostraron los <strong>beneficios</strong> de estudiar los <strong>mercados financieros</strong> y la posibilidad de alcanzar un <strong>desarrollo personal</strong> profundo.",
  "<strong>Cristian</strong> ya había obtenido <strong>pequeños resultados</strong>, y eso fue lo que me inspiró a dar el <strong>primer paso</strong>. Empezamos como un <strong>grupo pequeño</strong>, éramos solo <strong>10 personas</strong> que confiaban en la habilidad de mi hermano. Comenzamos con <strong>sesiones en vivo</strong>, donde él nos explicaba lo que estaba funcionando en ese momento.",
]

const historyPart2 = [
  "Pasaron casi <strong>cuatro años</strong> desde aquellos días, y lo que comenzó como un <strong>pequeño grupo</strong> en <strong>Telegram</strong> ha crecido hasta convertirse en una <strong>comunidad sólida</strong> con nuestra propia <strong>aplicación</strong>, <strong>Revolution</strong>. Aquí, las personas pueden recibir <strong>educación</strong>, <strong>consejos</strong>, y seguir un <strong>proceso</strong> que les permitirá convertirse en <strong>profesionales del trading</strong> y crecer a nivel <strong>personal</strong>.",
  "Durante este tiempo, aprendí muchísimo y conocí a <strong>personas</strong> que vivían de manera distinta, generando <strong>ingresos</strong> a través del <strong>trading</strong> y las <strong>afiliaciones</strong>. Me di cuenta de que el <strong>trading</strong> es un <strong>proceso</strong>, y al seguirlo, logré obtener <strong>resultados</strong> que nunca había imaginado.",
]

const historyPart3 = [
  "Puedo decir que mi <strong>vida</strong> cambió completamente.",
  "<strong>Revolution</strong> no solo me permitió <strong>generar ingresos</strong>, sino que me dio una <strong>comunidad</strong> y un <strong>propósito</strong>.",
]

const actually = [
  
  "Hoy, puedo cuidar de mí mismo, de mi familia, y lo más importante, puedo ayudar a otras personas que están buscando un cambio en sus vidas, tal como yo lo hice.",
  "Puedo aportarles a personas que son como yo.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que logré crecer tanto y tan rápido con Revolution? ",
 `Aquí te presento "los tres pilares" de este modelo de negocio que transformará tu vida...`,
]
  const historyData = [
   "Marcelo Díaz",
    "Argentina",
    "2020 - 2024",
  ]

  const calendlyPage = "/florencia-gartner/calendly";
const historyImages = [ img1, img2, img3, img4]
    //const isRegistered = localStorage.getItem("isRegistered") === "true";
const path = "florencia-gartner"
const googleSheets = "https://script.google.com/macros/s/AKfycbwz6o2YGVUstnSOPFU_XMQ5WNp2-zOZXOW002KSqrLflkHC9Uj7n6grqYIgdcHQHLVB/exec"
const wppLink = "https://wa.me/+5492215460223?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios"
const wppNumber = "+5492215460223"
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

export default LandingVslFlorencia;
