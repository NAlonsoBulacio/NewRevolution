
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
 


import img1 from "../../assets/nahuel_quispe/1.webp";
import img2 from "../../assets/nahuel_quispe/2.webp";
import img3 from "../../assets/nahuel_quispe/3.webp";
import img4 from "../../assets/nahuel_quispe/4.webp";

const LandingVslNahuelQuispe = () => {
  
 const historyPart1 = [
  "Soy un tipo sencillo que nació y se crió en una Villa de Salta Capital en el Norte de Argentina. Tuve la dicha de tener una familia muy trabajadora pero nunca estuvo lleno de lujos.",
  "Más allá de eso, desde muy chico fui muy ambisioso y siempre quise ser una persona muy importante.",
  "Hoy por hoy tengo un único propósito y fin en mi vida: Jubilar y hacer prosperar a mi familia.",
  "Si esto capta tu atención, te sugiero que leas cada palabra de esta página, porque será lo más importante que leas en todo el año.",
  "Mi “carrera” si se quiere decir empieza hace unos 4 Años cuando me encontraba trabajando como operador de Call center (llevaba 7 años haciendo lo mismo) y veía que siempre hacía la misma tarea y que por mas que trabajara más horas no podía “progresar” (comprarme un auto, una casa, viajar en vacaciones, etc). Hasta que, casi por casualidad, conocí el mundo de las finanzas y las criptos y empecé a interiorizarme en el tema. ",
]

const historyPart2 = [

  "Con el tiempo empecé a estudiar ya hacer trading de manera profesional, perdiendo mucho dinero en el proceso debido a que era prueba y error. Por que no tenía un mentor que tuviera resultados y por que no tenía plata para pagar esos dichosos cursos donde te enseñan a invertir por que eran muy caros. Luego de unos años, gracias a un amigo, me conecté con la oportunidad de Revolution, decidí ingresar a una presentación porque tenía mucha curiosidad y estaba harto de mi situación y quería ganar mucha plata y cambiar mi realidad. Luego de la presentación tome acción y comencé en Revolution en Septiembre de 2023",

]

const historyPart3 = [
  "Mientras estoy aquí, aprendí muchísimo, hice amigos que estaban en la misma situación que yo y conocí personas que tenían libertad financiera. Básicamente estaban donde quería estar yo. Ganaban dinero con trading y por venta de afiliados todos los días, vivían en las mejores zonas de Argentina y se compraban autos, celulares, computadoras; casi como si no les costara. Cosa que para mi en ese momento me parecía una completa locura.",
  "Y todo esto mientras yo trabajaba y trabajaba todos los días un montón de horas para tener resultados mediocres.",
  "Pero dejé mi orgullo y mi ego de lado y me cambió la perspectiva sobre cómo veía la vida.",
  "En Salta, mis amigos salían de fiesta con lo justo, laburaban muchisimos meses para darse un gustito.",
  "Yo sabía que quería otro estilo de vida, comprarme mis cosas,poder viajar y ayudar a mi familia a crecer.",
  "Quería una vida diferente, quería ser más y sabía que podía.",
  "Mi familia me apoyó en todas mis locuras, por más que muchas veces los hice renegar, porque me veían distinto. Mis amigos me molestaban porque no creían que se podía hacer tanta plata en tan poco tiempo. Pero yo no quería volver a mi vida de antes, sabía que no era mi camino.",
  "Empecé a aprender y a trabajar y así pude generar mis primeros dólares en Revolution, conocí personas maravillosas y que tenían otra mentalidad.",

  
]

const actually = [
  
  "He generado más de $35,000 USD con Revolution, vivo en Nordelta junto con las personas que conocí en Revolution (una locura) y tengo amigos que comparten los mismos objetivos.",
  "El dinero ya no es un fin en sí mismo, sino una consecuencia.",
  "Puedo cuidar de mí mismo, de mi familia, de mis amigos y, lo más importante… Es que hago lo que me gusta y me hace feliz.",
  "Puedo aportarles a personas que quieren aprender Trading o a las personas que se sienten estancadas en el sistema de empleo o industria tradicional.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que logré crecer tanto y tan rápido con Revolution? ",
 `Aquí te presento "los tres pilares" de este modelo de negocio que transformará tu vida...`,
]
  const historyData = [
   "Nahuel Quispe",
    "Salta - Argentina",
    "2 años",
  ]

  const calendlyPage = "/nahuel-quispe/calendly";
const historyImages = [ img1, img2, img3, img4]
    //const isRegistered = localStorage.getItem("isRegistered") === "true";
const path = "nahuel-quispe"
const googleSheets = "https://script.google.com/macros/s/AKfycbySvYldbFeVPb3NFObSDAzoUH7pi5ccudbumyerNkzVs3pCKk6BBIUd4mPhjJo-oEtu/exec"
const wppLink = "https://wa.me/+5491164204840?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios"
const wppNumber = "+5491164204840"
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

export default LandingVslNahuelQuispe;
