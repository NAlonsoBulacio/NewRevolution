import React from "react";
import VideoPreview from "../Video/VideoPreview";
import VideoWistia from "../Video/VideoWistia";
import VideoWistiaWpp from "../Video/VideoWistiaWpp";
const TitleAndVideo = ({
  video,
  url,
  googleSheetsUrl,
  calendlyPage,
  data,
  david,
  david_B
}) => {
  return (
    <div className="flex flex-wrap justify-center items-start text-center space-y-4">
      {david ? (
        ""
      ) : (
        ""
      )}
      <h1 className="lato-black text-gray-200 text-xl lg:text-5xl text-balance uppercase">
        {david || david_B
          ? "En este vídeo veras lo que las academias de trading no quieren que sepas."
          : "Aprendé Trading Sin Experiencia y Desde Casa: Todo en una App"}
      </h1>

      {david || david_B ? (
         <p className="poppins-medium text-yellow-500 text-sm lg:text-xl px-2">
         Al final del video te explico cómo aplicar a tu cupo.
       </p>
      ) : (
        <p className="poppins-medium text-yellow-500 text-sm lg:text-xl px-2 text-balance">
          Mas de 5000 personas ya estan viviendo de este sistema que te guía paso a paso, tenés todo lo que necesitás para empezar. Mirá el video.
        </p>
      )}
      <div className="flex justify-center w-full">
        {video === "True" ? (
          <VideoWistia dataUser={data} calendlyPageUrl={calendlyPage} />
        ) : video === "wpp" ? (
          <VideoWistiaWpp
            david_ana={david}
            david_B={david_B}
            dataUser={data}
            calendlyPageUrl={calendlyPage}
          />
        ) : (
          <VideoPreview urlPreview={url} googleSheets={googleSheetsUrl} />
        )}
      </div>
    </div>
  );
};

export default TitleAndVideo;
