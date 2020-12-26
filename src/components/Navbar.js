import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState("navbar__nav");
  const [showButton, setShowButton] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsSticky("navbar__sticky");
      } else {
        setIsSticky("");
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowButton("navbar__scroll-up-btn-show");
      } else {
        setShowButton("");
      }
    });
  }, []);

  const onClick = () => {
    window.scrollTo(0, 0);
  };

  const activeClick = () => {
    if (active === "") {
      setActive("navbar__active");
    } else {
      setActive("");
    }
  };

  return (
    <div className="navbar">
      <div onClick={onClick} className={`navbar__scroll-up-btn ${showButton}`}>
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className={`navbar__nav ${isSticky}`}>
        <div className="max-width">
          <Link className="navbar__logo" to="/">
            <img
              src="http://www.yachts-exception.com/img/logo-yachts-exception.png"
              alt=""
            ></img>
          </Link>

          <ul onClick={activeClick} className={`navbar__menu ${active}`}>
            <li>
              <Link to="/" className="navbar__menu-btn">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="navbar__menu-btn">
                Nos engagements
              </Link>
            </li>
            <li>
              <Link to="/home" className="navbar__menu-btn">
                Brokerage
              </Link>
            </li>
            <li>
              <Link to="/sur-mesure" className="navbar__menu-btn">
                Réalisation
              </Link>
            </li>
            <li>
              <Link to="/vente" className="navbar__menu-btn">
                Vente
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar__menu-btn">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__menu-btn">
            <i onClick={activeClick} className={`fas fa-bars ${active}`}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
