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
 

import img1 from "../../../../assets/matias_dechand/1.webp";
import img2 from "../../../../assets/matias_dechand/2.webp";
import img3 from "../../../../assets/matias_dechand/3.webp";
import img4 from "../../../../assets/matias_dechand/4.webp";

const LandingVslGuillermoCorvalan = () => {
  
  const historyPart1 = [
    "En <strong>2022</strong>, mi vida giraba en torno a la <strong>construcción</strong>. Trabajaba largas horas, ganaba <strong>300 usd por mes</strong> y en lo único que pensaba era en un <strong>futuro mejor</strong>.",
    "Aunque disfrutaba de mi <strong>trabajo</strong>, siempre supe que tenía el <strong>potencial</strong> para algo más grande. Sentía que estaba destinado a alcanzar <strong>metas más ambiciosas</strong>, pero no sabía por dónde empezar.",
    "Ahí fue cuando me topé con <strong>Revolution</strong> en las <strong>redes sociales</strong>. La <strong>comunidad vibrante</strong> y la promesa de aprender <strong>habilidades</strong> que podían transformar mi <strong>vida</strong> me atrajeron de inmediato. Decidí dar el <strong>salto</strong> y unirme a la <strong>academia</strong>, ansioso por aprender sobre <strong>trading</strong> y <strong>marketing digital</strong>. Este fue el <strong>primer paso</strong> en un <strong>viaje</strong> que cambiaría mi vida para siempre.",
  ];

  const historyPart2 = [
    "Mi <strong>viaje</strong> en <strong>Revolution</strong> comenzó con la <strong>educación</strong> en <strong>trading</strong>. Con la guía de <strong>expertos</strong> y <strong>mentores dedicados</strong>, aprendí a leer los <strong>mercados</strong>, desarrollar <strong>estrategias</strong> y gestionar <strong>riesgos</strong>. Al principio, los <strong>desafíos</strong> eran muchos, pero con <strong>perseverancia</strong> y el apoyo constante de la <strong>comunidad</strong>, comencé a ver <strong>resultados positivos</strong>. Mis primeras <strong>ganancias</strong>, aunque modestas, me dieron la <strong>confianza</strong> para seguir adelante.",
    "No me detuve en el <strong>trading</strong>. En <strong>Revolution</strong>, también tuve la oportunidad de sumergirme en el mundo del <strong>marketing digital</strong>. Aprendí a utilizar <strong>herramientas</strong> y <strong>técnicas</strong> para crear <strong>campañas efectivas</strong>, atraer <strong>audiencias</strong> y generar <strong>conversiones</strong>. Estas <strong>habilidades</strong> no solo complementaron mi conocimiento en <strong>trading</strong>, sino que también me abrieron nuevas puertas en el <strong>ámbito digital</strong>.",
  ];

  const historyPart3 = [
    "Fines del <strong>2023</strong>, di un paso más al convertirme en <strong>Growth Partner</strong>. Esta posición me permitió aplicar mis conocimientos de <strong>trading</strong> y <strong>marketing digital</strong> para ayudar a otros a <strong>crecer</strong> y alcanzar sus <strong>metas</strong>. Ser parte del <strong>éxito</strong> de otras personas fue increíblemente <strong>gratificante</strong> y reforzó mi <strong>determinación</strong> de seguir adelante.",
    "Puedo decir con <strong>orgullo</strong> que mis <strong>esfuerzos</strong> han dado frutos gracias a la <strong>educación</strong> y el <strong>apoyo</strong> de <strong>Revolution</strong>. Este <strong>éxito</strong> me permitió mudarme a <strong>Europa</strong>, cumpliendo uno de mis mayores <strong>sueños</strong>. Pero esto es solo el <strong>comienzo</strong>. La <strong>comunidad de Revolution</strong> sigue siendo mi <strong>fuente de inspiración</strong> y <strong>apoyo</strong> mientras sigo cumpliendo mis <strong>metas</strong> y <strong>aspiraciones</strong>.",
    "Mi <strong>historia</strong> es una prueba viviente de lo que se puede lograr con <strong>determinación</strong>, <strong>educación</strong> y el <strong>apoyo adecuado</strong>. Si alguna vez has sentido que estás destinado a algo más grande, te invito a unirte a <strong>Revolution Academy</strong>. Da el <strong>primer paso</strong> hacia tu propio <strong>éxito</strong> y agenda una llamada conmigo. Estoy aquí para ayudarte a comenzar tu <strong>viaje</strong> y a alcanzar tus <strong>sueños</strong>, al igual que yo lo hice.",
  ];
  const actually = [
    "Gané más de $500.000, vivo en Buenos Aires y tengo amigos que comparten los mismos objetivos.",
    "El dinero ya no es un problema.",
    "Puedo cuidar de mí mismo, de mi familia, de mis amigos y, lo más importante…",
    "Puedo aportarles a personas que son como yo.",
    "Y ahora seguramente te estarás preguntando, ¿cómo es que este joven argentino creció tanto y tan rápido con Revolution?",
    ` Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`,
  ];
  const historyData = [
    "Matias Dechand",
     "Buenos Aires, Argentina",
     "3 años",
   ]

  const calendlyPage = "/guillermo-corvalan/calendly";
  const historyImages = [img1, img2, img3, img4];
  //const isRegistered = localStorage.getItem("isRegistered") === "true";
  const path = "guillermo-corvalan";
  const googleSheets = "https://script.google.com/macros/s/AKfycbxPaWWJFSYQeefcdAmGew8oj1IEOHV3LLZDXCHyJzm2ISobmvSyepbP4GoDV5rSnTsDKg/exec"
const wppLink = "https://wa.me/+5493856185180?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios"
const wppNumber = "+5493856185180"
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

export default LandingVslGuillermoCorvalan;
