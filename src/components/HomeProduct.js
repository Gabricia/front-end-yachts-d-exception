import React, { useEffect } from "react";
import "./HomeProduct.css";
import { Link } from "react-router-dom";
import BateauCard from "./BateauCard";
import { connect } from "react-redux";
import { fetchBateaux } from "../actions";

const HomeProduct = (props) => {
  useEffect(() => {
    props.fetchBateaux();
  });
  return (
    <div className="homeproduct">
      <section className="homeproduct__section">
        <div className="max-width">
          <h2 className="title">Nos Yachts</h2>
          <div className="homeproduct__carousel">
            {props.bateaux.slice(0, 3).map((bateau) => (
              <Link to={`/productdetail/${bateau._id}`}>
                <BateauCard
                  id={bateau._id}
                  model={bateau.model}
                  prix={bateau.prix}
                  dimensions={bateau.dimensions}
                  moteurs={bateau.moteurs}
                  annee={bateau.annee}
                  hmoteurs={bateau.hmoteurs}
                  photo={bateau.photos[0].url}
                />
              </Link>
            ))}
          </div>
        </div>
        <Link to="/home" className="homeproduct__button">
          Voir tout
        </Link>
      </section>
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

export default connect(mapStateToProps, { fetchBateaux })(HomeProduct);
