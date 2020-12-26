import React, { useEffect } from "react";
import "./ProductDetail.css";
import { connect } from "react-redux";
import { fetchBateau } from "../actions";
import { Link } from "react-router-dom";
import Sliders from "./Slider";

const ProductDetail = (props) => {
  useEffect(() => {
    props.fetchBateau(props.match.params._id);
  }, []);

  if (!props.bateau) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="productdetail">
        <Link to="/home" className="productdetail__button button--callback">
          <i className="fas fa-chevron-left"></i>
          <div className="button--callbackText">Retour</div>
        </Link>
        <div className="productdetail__slider">
          <Sliders photos={props.bateau.photos} />
        </div>
        <div className="productdetail__infos">
          <div className="productdetail__infosDetails">
            <h3 className="productdetail__title">{props.bateau.model}</h3>
            <ul className="productdetail__infosDetailsList">
              <li className="productdetail__infosDetailsListItems">
                RÉFÉRENCE : {props.bateau.reference}
              </li>
              <li className="productdetail__infosDetailsListItems">
                DIMENSIONS (Lxl) : {props.bateau.longueur} x{" "}
                {props.bateau.largeur} M
              </li>
              <li className="productdetail__infosDetailsListItems">
                PAVILLON : {props.bateau.pavillon}
              </li>
              <li className="productdetail__infosDetailsListItems">
                MOTEURS : {props.bateau.moteurs}
              </li>
              <li className="productdetail__infosDetailsListItems">
                H. MOTEURS : {props.bateau.hmoteurs}
              </li>
              <li className="productdetail__infosDetailsListItems">
                ANNÉE : {props.bateau.annee}
              </li>
              <li className="productdetail__infosDetailsListItems">
                CABINES : {props.bateau.cabines}
              </li>
              <li className="productdetail__infosDetailsListItems">
                CABINES ÉQUIPAGE : {props.bateau.equipage}
              </li>
              <li className="productdetail__infosDetailsListItems">
                EAU : {props.bateau.eau}
              </li>
              <li className="productdetail__infosDetailsListItems">
                CARBURANT : {props.bateau.carburant}
              </li>
              <li className="productdetail__infosDetailsListItems">
                PRIX : {props.bateau.prix} €
              </li>
            </ul>
          </div>
          <div className="productdetail__description">
            {props.bateau.description}
            <div className="productdetail__buttons">
              <Link
                to="/contact"
                className="productdetail__button button--info"
              >
                <i className="fas fa-info"></i>
                <div className="button--infoText">Plus d'informations</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

//ownProps is the exact same props object that the one passed in the component
//(here: the props of bateau comp)
const mapStateToProps = (state, ownProps) => {
  return { bateau: state.bateaux[ownProps.match.params._id] };
};

export default connect(mapStateToProps, { fetchBateau })(ProductDetail);
