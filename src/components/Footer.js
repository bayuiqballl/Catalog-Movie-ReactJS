import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  return (
    <div className="d-flex flex-column bg-dark  text-white mt-5">
      <footer className="footer">
        <div className="text-center">
          <span>&copy; Impact Byte</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
