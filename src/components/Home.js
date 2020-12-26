import React, { useEffect, useState } from "react";
import "./Home.css";
import BateauCard from "./BateauCard";
import { connect } from "react-redux";
import { fetchBateaux } from "../actions";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [filter, setFilter] = useState("comparePrix");

  useEffect(() => {
    props.fetchBateaux();
  });

  //filtering bateau by longueur
  const compareLongueur = (a, b) => {
    if (a.longueur < b.longueur) {
      return 1;
    }
    if (a.longueur > b.longueur) {
      return -1;
    }
    return 0;
  };

  //filtering bateau by annee
  const compareAnnee = (a, b) => {
    if (a.annee < b.annee) {
      return 1;
    }
    if (a.annee > b.annee) {
      return -1;
    }
    return 0;
  };

  //filtering bateau by prix
  const comparePrix = (a, b) => {
    if (a.prix < b.prix) {
      return 1;
    }
    if (a.prix > b.prix) {
      return -1;
    }
    return 0;
  };

  if (filter === "comparePrix") {
    props.bateaux.sort(comparePrix);
  } else if (filter === "compareAnnee") {
    props.bateaux.sort(compareAnnee);
  } else {
    props.bateaux.sort(compareLongueur);
  }


  
  //if the admin is signed in render the button create
  const renderCreate = () => {
    if (props.isSignedIn) {
      return (
        <Link to="/bateaucreate" className="home__button--bateauCreate">
          Créer un bateau
        </Link>
      );
    }
  };

  return (
    <div className="home">
      <div className="max-width">
        <div className="home__container">
          <div className="home__header">
            <div
              className="home__tri--1"
              onClick={() => setFilter("compareAnnee")}
            >
              <div className="home__triImg--1"></div>
              <div className="home__triText">Trier par année</div>
            </div>
            <div
              className="home__tri--2"
              onClick={() => setFilter("comparePrix")}
            >
              <div className="home__triImg--2"></div>
              <div className="home__triText">Trier par prix</div>
            </div>
            <div
              className="home__tri--3"
              onClick={() => setFilter("compareLongueur")}
            >
              <div className="home__triImg--3"></div>
              <div className="home__triText">Trier par taille</div>
            </div>
          </div>
          <div className="home__description">
            <h3 className="home__descriptionTitle">
              Vous envisagez l'acquisition d'un Yacht ?
            </h3>
            <p className="home__descriptionText">
              Pierre Couach, spécialiste reconnu de la construction navale, avec
              plus de 300 yachts construits à son actif, vous conseille au mieux
              de vos intérêts. Yachts d’Exception sélectionne les meilleurs
              yachts du marché, à leur juste prix, et vous propose ceux qui
              correspondent exactement à votre demande.
            </p>
            <p className="home__descriptionText">
              Chaque bateau Couach vendu par Yachts d’Exception fait l’objet
              d’un dossier descriptif complet, incluant l’historique de
              construction et d’entretien, illustré de photos exclusives. Une
              information précise, par le spécialiste des yachts Couach.
            </p>
            <Link to="/sur-mesure" className="home__descriptionButton">
              Découvrir nos réalisations
              <i className="fas fa-angle-right"></i>
            </Link>
          </div>
          <div className="home__row">
            {props.bateaux.map((bateau) => (
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
        </div>
      </div>
      {renderCreate()}
    </div>
  );
};

//pull differents states from redux to the component
const mapStateToProps = (state) => {
  return {
    bateaux: Object.values(state.bateaux),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchBateaux })(Home);
