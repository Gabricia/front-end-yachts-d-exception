import React from "react";
import Header from "./Header";
import Apropos from "./Apropos";
import MyServices from "./MyServices";
import HomeProduct from "./HomeProduct";
import "./NouvellePageAccueil.css";

const NouvellePageAccueil = () => {
  return (
    <div className="nouvellepageaccueil">
      <Header />
      <Apropos />
      <MyServices />
      <HomeProduct />
    </div>
  );
};

export default NouvellePageAccueil;
