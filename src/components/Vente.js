import React, { useEffect } from "react";
import "./Vente.css";
import { Link } from "react-router-dom";
import BateauCard from "./BateauCard";
import { connect } from "react-redux";
import { fetchBateaux } from "../actions";

const Vente = (props) => {
  useEffect(() => {
    props.fetchBateaux();
  });

  //only bateau vendu
  const bateauVendu = props.bateaux.filter(function (bateau) {
    return bateau.vendu === true;
  });

  return (
    <div className="vente">
      <div className="max-width">
        <div className="vente__container">
          <div className="vente__header">
            <div className="vente__header--left"></div>
            <div className="vente__header--right">
              <h3 className="vente__headerTitle">
                Vous avez décidé de vendre votre yacht actuel ?
              </h3>
              <p className="vente__headerParagraph">
                Parce qu’il en a construit pendant plus de 25 ans, Pierre Couach
                connait les spécificités et les points forts de chaque modèle de
                Couach existant. Il se fait fort de les expliquer et de les
                mettre en avant auprès des acheteurs potentiels. Sa parfaite
                connaissance de ce marché particulier lui permet de vous
                conseiller sur un prix de vente attractif.
              </p>
            </div>
          </div>
          <div className="vente__bateaux">
            {bateauVendu.map((bateau) => (
              <Link to={`/productdetail/${bateau._id}`}>
                <BateauCard
                  id={bateau._id}
                  model={bateau.model}
                  prix={bateau.prix}
                  longueur={bateau.longueur}
                  largeur={bateau.largeur}
                  moteurs={bateau.moteurs}
                  annee={bateau.annee}
                  hmoteurs={bateau.hmoteurs}
                  photo={bateau.photos[0].url}
                />
              </Link>
            ))}
          </div>
          <Link to="/contact" className="vente__button">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bateaux: Object.values(state.bateaux),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchBateaux })(Vente);
