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
import ModalButton from "../../components/ModalButton/ModalButtonGreen";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import img1 from "../../assets/david_ana/1.webp";
import img2 from "../../assets/david_ana/2.webp";
import img3 from "../../assets/david_ana/3.webp";
import img4 from "../../assets/david_ana/4.webp";

import testimonio from "../../assets/testimonios-david/testimonio.jpg"
import testimonio2 from "../../assets/testimonios-david/testimonio2.jpg"
import testimonio3 from "../../assets/testimonios-david/testimonio3.jpg"
import testimonio4 from "../../assets/testimonios-david/testimonio4.jpg"
import testimonio5 from "../../assets/testimonios-david/testimoinio5.jpg"
import testimonio6 from "../../assets/testimonios-david/testimoinio6.jpg"
import testimonio7 from "../../assets/testimonios-david/testimoinio7.jpg"
import testimonio8 from "../../assets/testimonios-david/testimonio8.jpg"

const LandingVslDavidA2 = () => {

const testimonios = [
  testimonio8, testimonio7, testimonio6, testimonio5, testimonio4, testimonio3, testimonio2, testimonio
]

  const historyPart1 = [
    "Comencé en el mundo de las <strong style='font-weight:bold;'>inversiones digitales</strong> de la peor manera. Fui víctima de <strong style='font-weight:bold;'>estafas</strong>, perdí dinero en <strong style='font-weight:bold;'>opciones binarias</strong>, y tuve malas experiencias con <strong style='font-weight:bold;'>bots de trading</strong>.",
    "Lejos de rendirme, decidí <strong style='font-weight:bold;'>aprender de manera real</strong> a ganar dinero por internet. Invertí en <strong style='font-weight:bold;'>cursos</strong>, pagué miles de dólares en <strong style='font-weight:bold;'>academias de trading</strong>, y me rodeé de los <strong style='font-weight:bold;'>entornos correctos</strong>.",
  ];

  const historyPart2 = [
    "Hace poco más de un año, descubrí <strong style='font-weight:bold;'>Revolution</strong>. Lo primero que hice fue visitar sus <strong style='font-weight:bold;'>oficinas</strong> y, en agosto de 2023, realicé mi primera <strong style='font-weight:bold;'>transmisión en vivo</strong> con Cristian Díaz.",
    "Desde entonces, he obtenido resultados <strong style='font-weight:bold;'>consistentes</strong> en trading, mes tras mes.",
  ];

  const historyPart3 = [
    "Puedo decir que mi <strong style='font-weight:bold;'>vida</strong> cambió completamente.",
    "Hoy, me rodeo de <strong style='font-weight:bold;'>emprendedores</strong> de Argentina y Latinoamérica, personas que generan entre <strong style='font-weight:bold;'>$15,000 y $50,000 USD</strong> mensuales, y juntos seguimos <strong style='font-weight:bold;'>creciendo</strong>, probando nuevas oportunidades, y cambiando nuestras vidas.",
  ];

  const actually = [
    "He generado más de $350,000 USD gracias al trading y al marketing digital.",
    "Actualmente, genero más de $10,000 USD mensuales.",
    "Y he ayudado a más de 2.400 personas a superar sus primeros 100 dólares mensuales con el trading.",
    "Accediendo hoy, tendrás bonificado lo siguiente:",
  ];

  const historyData = [
    "<strong style='font-weight:bold;'>David Ana</strong>",
    "<strong style='font-weight:bold;'>Argentina</strong>",
    "<strong style='font-weight:bold;'>2020 - 2024</strong>",
  ];

  const calendlyPage = "/david-ana/calendly";
  const historyImages = [img1, img2, img3, img4];
  //const isRegistered = localStorage.getItem("isRegistered") === "true";
  const path = "david-ana-b";
  const googleSheets =
    "https://script.google.com/macros/s/AKfycbzb5nyw9g5hmj-aJ4oVWGa1CdCi5Pa7LG58r32I24cqdUPJkuPLWWL93OxImp-eMc6UwQ/exec";
  const wppLink =
    "https://wa.me/+5491171035104?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios";
  const wppNumber = "+5491171035104";
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
    wppNumber,
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
          <TitleAndVideo
            video={"wpp"} 
            calendlyPage={calendlyPage}
            data={data}
            david_B={true}
          />
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
            <Actually
              historyPart3={historyPart3}
              actually={actually}
              img4={img4}
            />
            <Pilares david={true}/>
            <MissionAndResult david={true} testimonios={testimonios} />
          </div>
          {/* <PresentProgram  david={true}/> */}
          <Gifts david={true} calendlyPage={calendlyPage} />
          <OfferSection david={true} calendlyPageUrl={calendlyPage} />
        </div>
      </div>
      <div className="bg-gray-900 py-4 border-t-[1px] border-yellow-600">
      <Disclaimer />
        <Footer />
      </div>
      <ModalButton calendlyPage={calendlyPage} />
    </div>
  );
};

export default LandingVslDavidA2;
