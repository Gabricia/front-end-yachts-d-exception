import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        &copy; 2020 by Yachts d'Exception. All rights reserved.
      </div>
      <div className="footer__link">
        <Link to="/mentionslegales" className="footer__legal">
          Mention légales
        </Link>
        <Link to="/contact" className="footer__contact">
          Contact
        </Link>
        <Link to="/admin" className="footer__admin">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Footer;
