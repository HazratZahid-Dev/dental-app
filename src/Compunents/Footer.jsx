import React from "react";
import "../CompunentsStyle/Footer.css";
import logo from "../images/dentalLogo.png";
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";
import app from '../images/app.png'
import google from '../images/google.png'
const Footer = () => {
  return (
    <>
      <div className="Main__footer">
        <div className="logo__div">
          <img src={logo} className="logo"></img>
          <h3 className="mt-3 font-bold ">Bandaid</h3>
        </div>
        <div className="footer__icons">
        
            <button type="button" className="mt-2">Service</button>
            <button type="button" className="ml-4">Our Blogs</button>
       
           
            <p className="fontAwesome"><FaFacebook/><FaInstagram/><FaTwitter/></p>
            <p className="mt-5">&copy; Bandaid dental,All rights reserved</p>
            <div className=" google__app">
                <img src={app} className='app'></img>
                <img src={google} className='app'></img>
            </div>
           


        </div>
      </div>
    </>
  );
};

export default Footer;
