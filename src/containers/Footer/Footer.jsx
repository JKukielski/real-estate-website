import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-container">
        <div className="app__footer-container_content">
          <div className="app__footer-container_content-contact">
            <h2>Contact Us:</h2>
            <p className="footer__address">
              19 South Joy Ridge St. Miami, FL 33157
            </p>
            <p className="footer__number">786-522-9519</p>
            <p className="footer__number">786-375-8282 </p>
          </div>
          <div className="app__footer-container_content-company">
            <Link to="/" className="app__footer-logo">
              <a className="footer__logo" href="/">
                J&K PROPERTIES
              </a>
            </Link>
            <p>"Find Your New Home"</p>
            <div className="app__footer-social">
              <AiFillInstagram color="#FFF" fontSize={27} cursor="pointer" />
              <AiFillFacebook color="#FFF" fontSize={27} cursor="pointer" />
              <AiOutlineTwitter color="#FFF" fontSize={27} cursor="pointer" />
            </div>
          </div>
          <div className="app__footer-container_content-working">
            <h2>Working Hours:</h2>
            <p>Monday-Friday:</p>
            <p>08:00 - 16:00</p>
          </div>
        </div>
        <div className="app__footer-container_copyright">
          <p>2022 J&K Properties. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
