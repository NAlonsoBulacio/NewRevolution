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
 

import img1 from "../../assets/raul_crisorio/raul1.jpeg";
import img2 from "../../assets/raul_crisorio/raul2.jpeg";
import img3 from "../../assets/raul_crisorio/raul3.jpeg";
import img4 from "../../assets/raul_crisorio/raul4.webp";

const LandingVslRaul = () => {
  
const historyPart1 = [
  "Todo empezó a los 25 años, recién egresado y con un trabajo estable, me sentía perdido. Mi sueldo se iba en <strong>gastos innecesarios</strong>, <strong>fiestas</strong> y <strong>alcohol</strong>, afectando mi <strong>salud</strong>",
  "Mis dos pasiones siempre han sido <strong>dormir</strong> y <strong>comer bien</strong>. En agosto de 2018, una colega posteó 'Gané $4 mientras <strong>dormía</strong>', y me intrigó. La contacté esperando que trabajara en una empresa de <strong>colchones</strong>, pero era mucho mejor.",
  "Vi un <strong>gráfico</strong> y oí hablar de <strong>trading</strong> por primera vez. Conversamos tres horas, salí maravillado y esperanzado, sabiendo que tenía una gran oportunidad para cambiar mi <strong>vida</strong> y la de mi <strong>familia</strong>. Y así fue.",
]

const historyPart2 = [
  "Fue un proceso largo desde el 2018 hasta hoy, pero no me arrepiento de absolutamente nada, logré conocer muchas personas, grandes <strong>mentores</strong>, conocí <strong>millonarios</strong>, gané sumas de <strong>dinero</strong> que nunca antes había conocido. Hoy en día conozco más de <strong>20 países</strong>, puedo elegir el lugar en donde vivir y gozo de la <strong>libertad diaria</strong> de elegir qué quiero hacer todos los días.",
  "Puedo pasar tiempo con mi <strong>familia</strong>, ver a mi <strong>hija</strong> crecer todos los días, rodearme de personas que ganan <strong>millones de dólares</strong> al año y que todo el tiempo hablan de <strong>prosperidad</strong> y <strong>negocios</strong>.",
  "No te voy a negar, cuando comencé pensé que esto me haría <strong>millonario</strong> de la noche a la mañana, y nada más alejado de la realidad. Comprendí después de varios años de proceso, que en el mundo de los <strong>negocios</strong> hay que tener una mirada a <strong>largo plazo</strong>. Es la única forma de tener <strong>éxito duradero</strong>. Y que los <strong>atajos</strong> no existen, había que hacer las cosas bien.",
]

const historyPart3 = [
  "Hoy gracias a todos mis aciertos y desaciertos en el mundo de los <strong>negocios</strong>, puedo elegir <strong>Revolution</strong> como vehículo financiero más potente que existe hoy en día. Porque está constituido desde bases sólidas, pensado a <strong>largo plazo</strong> y combina <strong>modelos de negocios</strong> super potentes.",
  "Hoy veo a mis amigos de la <strong>facultad</strong> y el <strong>colegio</strong>, en un trabajo que no les gusta, manejando un <strong>auto</strong> que no les gusta, si es que tienen, viviendo en una <strong>ciudad</strong> que no les gusta, y trabajando todo el año porque no les alcanza para irse de <strong>vacaciones</strong>.",
  "Es una locura, asumen que todo lo que les pasa es <strong>normal</strong>, y déjame decirte, que eso NO es <strong>normal</strong>, tienes todas las capacidades para vivir la <strong>vida</strong> que vos elijas, no la que te toca.",
  "Solo tienes que tener <strong>huevos</strong> para tomar la decisión de hacerlo, y <strong>huevos</strong> para mantenerte.",
]

const actually = [
  "Gané más de $500.000, vivo en Buenos Aires y tengo amigos que comparten los mismos objetivos.",
  "El dinero ya no es un problema.",
  "Puedo cuidar de mí mismo, de mi familia, de mis amigos y, lo más importante…",
  "Puedo aportarles a personas que son como yo.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que este joven argentino creció tanto y tan rápido con Revolution?",
 ` Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`,
]
  const historyData = [
   "Raúl Crisorio",
    "Buenos Aires, Argentina",
    "2018–2024",
  ]

  const calendlyPage = "/raul-crisorio/calendly";
const historyImages = [ img1, img2, img3, img4]
    //const isRegistered = localStorage.getItem("isRegistered") === "true";
const path = "raul-crisorio"
const googleSheets = "https://script.google.com/macros/s/AKfycbzZ-KSRlra8wiX8tOE8nQRhoppyTwua9PqXrrc_xgeR04DvD41-hS5_9i7CwiweXiaW/exec"
const wppLink = "https://wa.me/+5493518170429?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios"
const wppNumber = "+5493518170429"
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

export default LandingVslRaul;
