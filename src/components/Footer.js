import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./../assets/img/logo/logo-catalog.png";

export const Footer = () => {
  return (
    <div className="d-flex flex-column bg-dark  text-white mt-5">
      <footer className="container-fluid">
        <div className="row py-5">
          <div className="col">
            <img src={Logo} alt=""/>
            <p><small>MOOV Center is a Responsive PrestaShop Theme best suitable for VIDEO, MOVIE, NEWS, MAGAZINE, BLOG or REVIEW SITES.&copy;Impect Byte</small></p>
          </div>
          <div className="col">
            <h5><strong>CATAGORIES</strong></h5>
            <br/>
            <p><small>PREMIUM VIDEOS</small></p>
            <p><small>PREMIUM DOWNLOAD</small></p>
            <p><small>FREE DOWNLOAD</small></p>
            <p><small>MEMBERSHIP</small></p>
            <p><small>TV SHOWS</small></p>
            <p><small>POPULAR SHOWS</small></p>
          </div>
          <div className="col">
            <h5><strong>INFORMATION</strong></h5>
            <br/>
            <p><small>ABOUT US</small></p>
            <p><small>PAGES CONFIGURATION</small></p>
            <p><small>PRICES DROP</small></p>
            <p><small>NEW PRODUCT</small></p>
            <p><small>BEST SALES</small></p>
            <p><small>SITE MAP</small></p>
            <p><small>STORIES</small></p>
          </div>
          <div className="col">
            <h5><strong>YOUR ACCOUNT</strong></h5>
            <br/>
            <p><small>PPERSONAL INFO</small></p>
            <p><small>MERCHANDISE RETURNS</small></p>
            <p><small>ORDERS</small></p>
            <p><small>CREDIT SLIP</small></p>
            <p><small>ADDRESSES</small></p>
            <p><small>MY WHISLIST</small></p>
          </div>
          <div className="col">
            <h5><strong>CONTACTS</strong></h5>
            <br/>
            <p><small>INDONESIA</small></p>
            <p><small>JAKARTA</small></p>
            <p className="text-danger"><strong>021-089-029</strong></p>
            <p><small>demo@demo.com</small></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
