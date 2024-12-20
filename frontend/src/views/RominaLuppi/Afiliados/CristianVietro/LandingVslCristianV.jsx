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
 


import img1 from "../../../../assets/romina_luppi/1.webp";
import img2 from "../../../../assets/romina_luppi/2.webp";
import img3 from "../../../../assets/romina_luppi/3.webp";
import img4 from "../../../../assets/romina_luppi/4.webp";

const LandingVslCristianV = () => {
  

  const historyData = [
    " Romina Luppi",
     "Buenos Aires, Argentina",
     "2023 - 2024",
   ]
  const historyPart1 = [
  "A los <strong>18 años</strong> decidí comenzar a estudiar una <strong>carrera universitaria</strong> para “poder ser alguien en el futuro”. Mientras estudiaba también trabajé en varias <strong>empresas de renombre</strong>.",
  "Después de muchos años de <strong>estudio</strong> y <strong>trabajo</strong>, me di cuenta que mi <strong>sueldo</strong> nunca alcanzaba para nada. Me di cuenta que dedicaba todo mi <strong>tiempo</strong> por muy <strong>poco dinero</strong>. No quería seguir con ese estilo de vida que tenía, necesitaba hacer algo <strong>distinto</strong> si quería conseguir una vida con <strong>libertad de tiempo</strong> y <strong>libertad financiera</strong>.",
  "Comencé a cambiar mi <strong>mentalidad</strong>, leía <strong>libros</strong> sobre mentalidad y sobre el mundo de las <strong>inversiones</strong> y así fue como llegué a <strong>Revolution</strong>.",
]

const historyPart2 = [
  "Inicié en <strong>Revolution</strong> en <strong>Agosto del 2023</strong>, sin <strong>conocimientos previos</strong>, si bien estudié una <strong>carrera contable</strong>, nada tenía que ver con el mundo del <strong>trading</strong>. Encontré <strong>personas</strong> y <strong>amigos</strong> con <strong>objetivos</strong> similares a los míos y conocí muchas personas que tenían la <strong>libertad de tiempo</strong> y <strong>financiera</strong> que yo estaba buscando.",
  "En tan poco tiempo no solo aprendí a desarrollar una <strong>nueva habilidad</strong> que está cambiando mi <strong>vida</strong> y la de muchas personas, sino que también <strong>facturé muchísimo dinero</strong> que en mi trabajo anterior me hubiera llevado muchos años conseguirlo.",
]

const historyPart3 = [
  "Hoy tengo una <strong>vida soñada</strong>, puedo <strong>trabajar</strong> desde la comodidad de mi <strong>casa</strong> o cualquier parte del <strong>mundo</strong>. Puedo <strong>viajar</strong> y recorrer otras <strong>provincias</strong> o <strong>países</strong>, ayudando a las personas a que se animen a conocer una <strong>nueva habilidad</strong> que también va a cambiar sus <strong>vidas</strong>.",
  "Obvio que cuando comencé tenía mucho <strong>miedo</strong>, como todo lo nuevo que uno hace. Pero estoy <strong>feliz</strong> y <strong>agradecida</strong> de la <strong>decisión</strong> que tomé, gracias a eso mi <strong>vida</strong> cambió <strong>100%</strong>. Disfruto de mi <strong>familia</strong>, de <strong>viajar</strong>, de rodearme de <strong>personas millonarias</strong> que me impulsan siempre a ir por más. Y lo que más disfruto es el poder <strong>ayudar</strong> a muchísimas personas más.",
]

const actually = [
  "Gané más de 20.000 usd con tan solo 8 meses en Revolution, me rodeo de personas exitosas que tienen los mismos objetivos. ",
  "Puedo disfrutar de la vida mientras viajo por cualquier lugar del mundo.",
  "Y lo que más me gusta es aportar valor a las personas que se encuentran en la misma situación que me encontraba yo hace unos meses.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que esta joven argentino creció tanto y tan rápido con Revolution?",
 `Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`,
]


  const calendlyPage = "/cristian-vietro/calendly";
const historyImages = [ img1, img2, img3, img4]
    //const isRegistered = localStorage.getItem("isRegistered") === "true";
const path = "cristian-vietro"
const googleSheets = "https://script.google.com/macros/s/AKfycbzhZ-BR7anX06CaccQefcpERuSqTAsyK7qxVFGiNYm2rjgPuC-UEYzkO-ZQu6otCqqPPQ/exec"
const wppLink = "https://wa.me/+5491125263234?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios"
const wppNumber = "+5491125263234"
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

export default LandingVslCristianV;
