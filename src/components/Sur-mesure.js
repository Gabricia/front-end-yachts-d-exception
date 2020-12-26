import React, { useEffect } from "react";
import "./Sur-mesure.css";
import { Link } from "react-router-dom";
import BateauCard from "./BateauCard";
import { connect } from "react-redux";
import { fetchBateaux } from "../actions";

const SurMesure = (props) => {
  useEffect(() => {
    props.fetchBateaux();
  });

  //only bateau sur mesure
  const bateauSurmesure = props.bateaux.filter(function (bateau) {
    return bateau.surmesure === true;
  });

  return (
    <div className="surmesure">
      <div className="max-width">
        <div className="surmesure__container">
          <div className="surmesure__header">
            <div className="surmesure__header--left"></div>
            <div className="surmesure__header--right">
              <h3 className="surmesure__headerTitle">Un Yacht sur-mesure ?</h3>
              <p className="surmesure__headerParagraph">
                C’est VOUS qui choisissez et décidez, Yachts d’Exception vous
                accompagne dans la concrétisation de votre projet. L'expertise
                d'un grand nom de la construction navale, Pierre Couach, en
                partenariat avec un réseau d'architectes navals et de designers
                internationaux, vous garantit une réelle plus-value. Qualité de
                construction, ergonomi, performances, prix du marché, valeur de
                revente, disponibilité, garanties financières, Yachts
                d'Exception passe en revue chaque critère avec le plus grand
                soin.
              </p>
            </div>
          </div>
          <div className="surmesure__bateaux">
            {bateauSurmesure.map((bateau) => (
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
          <Link to="/contact" className="surmesure__button">
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

export default connect(mapStateToProps, { fetchBateaux })(SurMesure);
