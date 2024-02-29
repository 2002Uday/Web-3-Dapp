import React from "react";

import logo2 from "../../images/logo2.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[5] justify-center items-center">
        <img src={logo2} alt="logo" className="w-52" />
      </div>
    </div>
  </div>
);

export default Footer;
