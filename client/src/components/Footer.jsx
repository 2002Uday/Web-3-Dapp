import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
    </div>
  </div>
);

export default Footer;
