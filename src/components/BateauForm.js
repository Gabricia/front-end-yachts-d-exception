import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "../validate";
import "./BateauForm.css";

const BateauForm = ({ onSubmit, handleSubmit }) => {
  //if the input is not completed or incorrect, display the error message
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="bateauform__errorMessage">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `bateauform__field ${
      meta.error && meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const onFormSubmit = (formValues) => {
    onSubmit(formValues);
  };

  //part that's allows us to have multiple photo and stock them in an array
  const renderPhoto = ({ fields, meta: { error, submitFailed } }) => (
    <ul>
      <li>
        <button
          type="button"
          onClick={() => fields.push({})}
          className="bateauform__button"
        >
          Ajouter une photo
        </button>
        {submitFailed && error && <span>{error}</span>}
      </li>
      {fields.map((photo, index) => (
        <li key={index}>
          <h4>Photo #{index + 1}</h4>
          <Field
            name={`${photo}.url`}
            type="text"
            component={renderInput}
            label="Inserez un URL"
          />
          <button
            type="button"
            onClick={() => fields.remove(index)}
            title="Supprimer une photo"
          >
            Supprimer la photo
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="bateauform">
      <Field name="model" component={renderInput} label="Nom du modèle" />
      <Field
        name="description"
        component={renderInput}
        label="Description du modèle"
      />
      <Field
        name="reference"
        component={renderInput}
        label="Référence du modèle"
      />
      <Field
        name="longueur"
        component={renderInput}
        label="Longueur du modèle"
      />
      <Field
        name="largeur"
        component={renderInput}
        label="Largeur du modèle"
      />
      <Field
        className="bateauform__field"
        name="pavillon"
        component={renderInput}
        label="Pavillon du modèle"
      />
      <Field name="moteurs" component={renderInput} label="Moteurs" />
      <Field name="hmoteurs" component={renderInput} label="H.Moteurs" />
      <Field name="annee" component={renderInput} label="Année du modèle" />
      <Field
        name="cabines"
        component={renderInput}
        label="Nombre de cabines du modèle"
      />
      <Field
        name="equipage"
        component={renderInput}
        label="Nombre de cabines équipage du modèle"
      />
      <Field name="eau" component={renderInput} label="Tirant d'eau" />
      <Field
        name="carburant"
        component={renderInput}
        label="Capacité carburant"
      />
      <Field name="prix" component={renderInput} label="Prix" />
      <div className="bateauform__checkbox">
        <label htmlFor="vendu">Vendu</label>
        <Field
          name="vendu"
          id="vendu"
          component="input"
          type="checkbox"
        />
      </div>
      <div className="bateauform__checkbox">
        <label htmlFor="surmesure">Sur-mesure</label>
        <Field
          name="surmesure"
          id="surmesure"
          component="input"
          type="checkbox"
        />
      </div>
      <FieldArray name="photos" component={renderPhoto} />
      <button className="bateauform__submitButton">Soumettre</button>
    </form>
  );
};

export default reduxForm({
  form: "BateauForm",
  validate,
})(BateauForm);
