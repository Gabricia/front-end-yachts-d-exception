import React from "react";
import { connect } from "react-redux";
import { createBateau } from "../actions";
import BateauForm from "./BateauForm";
import "./BateauCreate.css";
// import GoogleAuth from "../GoogleAuth";

const BateauCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createBateau(formValues);
  };

  
  return (
    <div className="bateaucreate">
      {/* <GoogleAuth /> */}
      <h3 className="bateaucreate__title">Créer un nouveau bateau</h3>
      <BateauForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createBateau })(BateauCreate);
