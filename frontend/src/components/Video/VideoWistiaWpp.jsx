import React, { useState, useRef, useEffect } from "react";
import RegistroPhone from "../Registro/RegistroPhone";
// import AnimatedButtonCalendly from "../AnimatedButton/AnimatedButtonCalendly";
import gif from "../../assets/gifSound.gif";
import { useLocation } from "react-router-dom";
import AnimatedButtonWpp from "../AnimatedButton/AnimatedButtonWpp";
import "./Video.css";

const VideoWistiaWpp = ({ dataUser, david_ana, david_B }) => {
  const [showForm, setShowForm] = useState(false);
  const [formUrl, setFormUrl] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [wppCode, setWppCode] = useState("");

  const location = useLocation();
  const isRegistered = "true";
  //  const isRegistered = new URLSearchParams(location.search).get("registered") === "true";
  const videoRef = useRef(null);

  const videoUrl = david_ana
    ? "https://fast.wistia.net/embed/iframe/tsfo8lisip"
    : david_B
    ? "https://fast.wistia.net/embed/iframe/esyk0h4kv3"
    : "https://fast.wistia.net/embed/iframe/kgsggghw2x";
  useEffect(() => {
    // Generar un código aleatorio de 6 dígitos cuando se monta el componente
    const generateCode = () => {
      return Math.floor(100000 + Math.random() * 900000).toString();
    };

    setWppCode(generateCode());

    if (videoRef.current) {
      const command = isRegistered ? "unMute" : "mute";
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: [] }),
        "*"
      );
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      );

      const timer1 = setTimeout(
        () => {
          setShowButton(true);
        },
        typeof david_ana !== "undefined" && david_ana
          ? 100
          : david_B
          ? 500
          : 500
      );

      const timer2 = setTimeout(() => {
        setShowButton2(true);
      }, 180000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isRegistered]);

  const actualizarEstadoPadre = (estado) => {
    setShowForm(false);
    if (estado && !formSubmitted) {
      setFormSubmitted(true);
      if (videoRef.current) {
        videoRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "unMute", args: [] }),
          "*"
        );
        videoRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: [] }),
          "*"
        );
        setShowOverlay(false);
      }
    }
  };

  const handleShowForm = (estado) => {
    setFormUrl(estado);
    setShowForm(true);
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
    actualizarEstadoPadre(true);
  };

  const wppMessage = david_ana
    ? "Hola! Vengo de la Masterclass… Quiero saber los requisitos para ingresar a la academia!"
    : `Hola! Vengo de la Masterclass… Quiero saber los requisitos para ingresar a la academia!`;
  const wppUrl = `https://wa.me/${dataUser.wppNumber}?text=${encodeURIComponent(
    wppMessage
  )}`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pb-4">
      <div className="w-full lg:w-2/3 h-full flex flex-col items-center px-1 lg:px-6 py-1 lg:py-4 bg-gray-800 rounded-2xl mb-4 border-gray-800 border-2 relative">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            ref={videoRef}
            className="w-full h-full rounded-lg shadow-lg"
            src={videoUrl}
            allow="autoplay"
            frameBorder="0"
            title="Wistia Video"
            allowFullScreen
            onLoad={() => {
              const command = isRegistered ? "unMute" : "mute";
              videoRef.current.contentWindow.postMessage(
                JSON.stringify({ event: "command", func: command, args: [] }),
                "*"
              );
              videoRef.current.contentWindow.postMessage(
                JSON.stringify({
                  event: "command",
                  func: "playVideo",
                  args: [],
                }),
                "*"
              );
            }}
          ></iframe>
        </div>
        {showOverlay && !isRegistered && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={handleOverlayClick}
          >
            <div className="bg-yellow-500 border-2 border-gray-100 bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center text-white text-center cursor-pointer">
              <img
                src={gif}
                alt="Click to unmute"
                className="w-10 lg:w-16 h-10 lg:h-16 mb-4"
              />
              <p className="text-xl font-bold">Tu video ya ha comenzado</p>
              <p className="text-lg">Haga clic para escuchar</p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center">
        {showButton && <AnimatedButtonWpp wppUrl={wppUrl} />}
      </div>
      {showButton2 ? <h1 className="text-white mt-2"></h1> : ""}
      {/* <div className="w-full flex justify-center mt-2">
        {showButton2 && <AnimatedButtonCalendly handleShowForm={handleShowForm} />}
      </div> */}
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => setShowForm(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <RegistroPhone
                redirectUrl={formUrl === 2 ? dataUser.calendlyPage : wppUrl}
                googleSheetsUrl={dataUser.googleSheets}
                actualizarEstado={actualizarEstadoPadre}
                data={dataUser}
                formUrl={formUrl}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoWistiaWpp;
