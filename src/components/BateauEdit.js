import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { editBateau, fetchBateau } from "../actions";
import BateauForm from "./BateauForm";
import "./BateauEdit.css";

const BateauEdit = (props) => {
  useEffect(() => {
    props.fetchBateau(props.match.params._id);
  }, []);

  const onSubmit = (formValues) => {
    props.editBateau(props.match.params._id, formValues);
  };

  if (!props.bateau) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bateauedit">
      <h3 className="bateauedit__title">Editer les infos du bateau</h3>
      <BateauForm
        //methode lodash a expliquer
        initialValues={_.pick(
          props.bateau,
          "model",
          "description",
          "reference",
          "dimensions",
          "pavillon",
          "moteurs",
          "hmoteurs",
          "annee",
          "cabines",
          "equipage",
          "eau",
          "carburant",
          "prix",
          "photos",
          "vendu",
          "surmesure"
        )}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    bateau: state.bateaux[ownProps.match.params._id],
  };
};

export default connect(mapStateToProps, { editBateau, fetchBateau })(
  BateauEdit
);
