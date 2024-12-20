import React from "react";
import TitleAndVideo from "../../components/TitleAndVideo/TitleAndVideo";
import background2 from "../../assets/background2.png";
import logo from "../../assets/logo/logo_blanco-re.png";
import History from "../../components/History/History";
import Actually from "../../components/Actually/Actually";
import Pilares from "../../components/Pilares/Pilares";
import MissionAndResult from "../../components/MissionAndResult/MissionAndResult";
import PresentProgram from "../../components/PresentProgram/PresentProgrtam";
import Gifts from "../../components/Gifts/Gifts";
import OfferSection from "../../components/OfferSection/OfferSection";
import Footer from "../../components/Footer/Footer";
import ModalButton from "../../components/ModalButton/ModalButton";
 

import img1 from "../../assets/roman_correa/1.webp";
import img2 from "../../assets/roman_correa/2.webp";
import img3 from "../../assets/roman_correa/3.webp";
import img4 from "../../assets/roman_correa/4.webp";

const LandingVslRomanCo = () => {
  
  const historyPart1 = [
    "Todo empezó cuando yo tenía 23 años, me la pasaba cortando el pelo cambiando <strong>tiempo</strong> por <strong>dinero</strong>.",
    "Estaba <strong>perdido</strong>, juntaba plata durante la semana para salir los fines de semana, hasta que un día…",
    "Me encontré con la <strong>oportunidad</strong> de <strong>Revolution</strong> en <strong>redes sociales</strong>, decidí ingresar a una presentación porque tenía mucha <strong>curiosidad</strong> y estaba harto de mi <strong>situación</strong>.",
    "Luego de la presentación tomé <strong>acción</strong> y comencé en <strong>Revolution</strong> el 01/09/2023.",
]

const historyPart2 = [
    "Mientras estuve allí, aprendí muchísimo, hice <strong>amigos</strong> que estaban en la misma que yo y conocí personas que tenían <strong>libertad financiera</strong>.",
    "Ganaban <strong>dinero</strong> con <strong>trading</strong> y por <strong>venta de afiliados</strong> todos los días, vivían en las mejores zonas de Argentina y se compraban ropa en las tiendas más caras, como si nada…",
    "Y todo esto mientras yo era el único que no tenía <strong>dinero</strong> en el bolsillo. Pero cambió mi <strong>perspectiva</strong> sobre cómo veía la <strong>vida</strong>.",
    "En mi ciudad <strong>Villa Constitución</strong>, mis <strong>amigos</strong> salían de fiesta y tomaban todos los días…",
    "Y yo trabajaba como <strong>peluquero</strong> y apenas ganaba 400 dólares al mes. Quería una <strong>vida diferente</strong>, quería ser más y sabía que podía.",
]

const historyPart3 = [
    "En <strong>Revolution</strong> generan <strong>ingresos</strong> en <strong>dólares</strong> todos los días con <strong>trading</strong> y <strong>afiliaciones</strong> y viven en las mejores zonas del país…",
    "Después de ingresar a <strong>Revolution</strong> algo cambió en mí. No era el mismo de antes...",
    "Quería una <strong>vida diferente</strong>, quería ser más y sabía que podía.",
    "Empecé a aprender y a trabajar y así pude generar mis primeros 1.600 <strong>dólares</strong>. Mi <strong>familia</strong> no me apoyaba porque me veían distinto, mis <strong>amigos</strong> me molestaban, pero yo no quería volver a mi <strong>vida</strong> de antes, sabía que no era mi <strong>camino</strong>. Todo esto fue en 2023…"
]
const actually = [
  "Facturé más de 20.000 dólares con Revolution, vivo en Tigre  y tengo amigos que comparten los mismos objetivos.",
  "El dinero ya no es un problema.",
  "Puedo cuidar de mí mismo, de mi familia, de mis amigos y, lo más importante…",
  "Puedo aportarles a personas que son como yo.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que este joven argentino creció tanto y tan rápido con Revolution?",
 ` Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`,
]
  const historyData = [
   "Roman Correa",
    "Tigre Buenos Aires",
    "2018-2024",
  ]

  const calendlyPage = "/roman-correa/calendly";
const historyImages = [ img1, img2, img3, img4]
    //const isRegistered = localStorage.getItem("isRegistered") === "true";
const path = "roman-correa"
const googleSheets = "https://script.google.com/macros/s/AKfycbxCX906hSSZVdE0njyZa3aj93oCgXPEUYFiQYACQcrjUr8F6-dXG80aTqOliB1ffFdxYA/exec"
const wppLink = "https://wa.me/+5493400532944?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios"
const wppNumber = "+5493400532944"
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

export default LandingVslRomanCo;
