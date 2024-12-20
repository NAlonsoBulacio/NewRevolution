import React from "react";
import TitleAndVideo from "../../../../components/TitleAndVideo/TitleAndVideo";
import logo from "../../../../assets/logo/logo_blanco-re.png";
import Footer from "../../../../components/Footer/Footer";
const LandingPageUrielBravo = () => {
 
const url = "/uriel-bravo/vsl?registered=true";
const googleSheetsUrl = "https://script.google.com/macros/s/AKfycbwp1TY8TK4n_RYcbdtZdjoFQ0JaIde_dU7vr3-WgIiGt6x4ph8FCfc79A2fy9nlQ-U1/exec"
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

export default LandingPageUrielBravo;
