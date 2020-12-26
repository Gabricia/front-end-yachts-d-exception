import React, { useEffect } from "react";
import "./Header.css";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Acheter",
        "Vendre",
        "Construire",
        "Etre conseillé",
        "Etre accompagné",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(".typing", options);
  }, []);

  return (
    <div className="header">
      <section className="header__section" >
        <div className="max-width">
          <div className="header__content">
            <div className="header__text-1">Bienvenue chez</div>
            <div className="header__text-2">Yachts d'exception</div>
            <div className="header__text-3">
              Vous souhaitez <span className="typing"></span>
            </div>
            <Link className="header__button" to="/contact">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
