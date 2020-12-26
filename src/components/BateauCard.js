import React from "react";
import "./BateauCard.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const BateauCard = ({
  id,
  model,
  photo,
  prix,
  longueur,
  largeur,
  moteurs,
  hmoteurs,
  annee,
  isSignedIn,
}) => {
  //if the admin is signed in render the button edit and delete
  const renderAdmin = () => {
    if (isSignedIn) {
      return (
        <div className="bateaucard__buttons">
          <Link to={`/bateauedit/${id}`} className="bateaucard__buttonEdit">
            EDITER
          </Link>
          <Link to={`/bateaudelete/${id}`} className="bateaucard__buttonDelete">
            SUPPRIMER
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="bateaucard" key={id}>
      <img className="bateaucard__img" src={photo} alt="" />
      <div className="bateaucard__info">
        <p className="bateaucard__model">{model}</p>
        <div className="bateaucard__infoDetails">
          <p className="bateaucard__infoDetail">
            DIMENSIONS (Lxl): {longueur} x {largeur} M
          </p>
          <p className="bateaucard__infoDetail">MOTEURS: {moteurs}</p>
          <p className="bateaucard__infoDetail">H. MOTEURS: {hmoteurs}</p>
          <p className="bateaucard__infoDetail">ANNEE: {annee}</p>
          <p className="bateaucard__infoDetail">PRIX: {prix} €</p>
          {renderAdmin()}
        </div>
      </div>
    </div>
  );
};

//pull differents states from redux to the component
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {})(BateauCard);
