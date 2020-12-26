import React, { useEffect } from "react";
import "./BateauDelete.css";
import Modal from "../Modal";
import createBrowserHistory from "../history";
import { fetchBateau, deleteBateau } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Home from "./Home";
// import Home from "../components/Home";

const BateauDelete = (props) => {
  useEffect(() => {
    props.fetchBateau(props.match.params._id);
  });

  const actions = (
    //react fragment allows us to have one block of jsx for two button
    //then we don't break the classes by passing the actions as props
    <React.Fragment>
      <button
        onClick={() => props.deleteBateau(props.match.params._id)}
        className="bateaudelete__button button--delete"
      >
        Supprimer
      </button>
      <Link to="/home" className="bateaudelete__button button--cancel">
        Annuler
      </Link>
    </React.Fragment>
  );

  const renderContent = () => {
    if (!props.bateau) {
      return "Voulez-vous supprimer ce bateau?";
    }
    return `Voulez-vous supprimer le modèle: ${props.bateau.model}`;
  };

  return (
    <div className="bateaudelet">
      <Home />
      <Modal
        title="Suppression Yacht"
        content={renderContent()}
        actions={actions}
        onDismiss={() => createBrowserHistory.push("/home")}
      />
    </div>
  );
};

//ownProps is the exact same props object that the one passed in the component
//(here: the props of bateauDelete comp)
const mapStateToProps = (state, ownProps) => {
  return {
    bateau: state.bateaux[ownProps.match.params._id],
  };
};

export default connect(mapStateToProps, { fetchBateau, deleteBateau })(
  BateauDelete
);
