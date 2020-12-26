import React, { useState } from "react";
import "./Admin.css";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";


const Admin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  //When the login button is pressed, the value of the states of textboxes
  //are passed to Firebase to authenticate. Firebase does its magic, and if
  //the authentication is successful returns a promise or throws an error.
  const handleSubmit = (e) => {
    //prevent the page from reloading because of the form tag
    e.preventDefault();
    console.log(email);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        props.signIn("lW7LtjDBCcUYQy3e1IqdBdmOfoJ3");
        console.log("auth reussie");
      })
      .catch((error) => alert(error));
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="admin">
      <div className="admin__container">
        <h2>Administrateur</h2>

        <form className="admin__form">
          <div className="admin__input">
            <input
              type="text"
              required
              value={email}
              onChange={onEmailChange}
            />
            <label>Adresse E-mail</label>
          </div>
          <div className="admin__input">
            <input
              type="password"
              required
              value={password}
              onChange={onPasswordChange}
            />
            <label>Mot de passe</label>
          </div>
          <input
            type="submit"
            className="admin__button"
            value="S'identifier"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(Admin);
