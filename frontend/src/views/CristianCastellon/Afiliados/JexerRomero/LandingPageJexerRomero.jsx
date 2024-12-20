import React from "react";
import TitleAndVideo from "../../../../components/TitleAndVideo/TitleAndVideo";
import logo from "../../../../assets/logo/logo_blanco-re.png";
import Footer from "../../../../components/Footer/Footer";
const LandingPageJexerRomero = () => {
 
const url = "/jexer-romero/vsl?registered=true";
const googleSheetsUrl = "https://script.google.com/macros/s/AKfycbyKurfjYtSsv-fM6e_hKb-CH0ntxE6vkXyBJ5VCGaN700CKNd_ZsYisVT95XXU9V5jEJA/exec"
  return (
    <div >
      <div
        className="flex flex-wrap justify-center  py-4 bg-gray-900 "
      >
        <div className="w-screen h-14 lg:h-20  flex justify-center items-center border-b-[1px] border-yellow-600">
          <img className="w-14 lg:w-20" src={logo} alt="logo" />
        </div>
        <div className="px-3 lg:px-14 xl:px-[9rem] pt-2 lg:pt-6">
        <TitleAndVideo url={url} googleSheetsUrl={googleSheetsUrl} />
        </div>
      </div>
      <div className="bg-gray-900 py-4 border-t-[1px] border-yellow-600 ">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPageJexerRomero;
