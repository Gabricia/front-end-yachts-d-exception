import React, { useState } from "react";
import "./Contact.css";
import LocationOn from "@material-ui/icons/LocationOnOutlined";
import Mail from "@material-ui/icons/MailOutlineOutlined";
import PhoneInTalk from "@material-ui/icons/PhoneInTalkOutlined";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Send from "@material-ui/icons/Send";
import bateaux from "../apis/bateaux";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [message, setMessage] = useState("");

  const contact = {
    nom: nom,
    prenom: prenom,
    email: email,
    numero: numero,
    message: message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bateaux.post("/contact", { data: contact }).then((response) => {
      if (response.data.status === "success") {
        console.log(contact);
        alert("Message envoyé");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Echec de l'envoi du message. Réssayez");
      }
    });
  };

  const resetForm = () => {
    setNom("");
    setPrenom("");
    setEmail("");
    setNumero("");
    setMessage("");
  };

  const onNomChange = (event) => {
    setNom(event.target.value);
  };
  const onPrenomChange = (event) => {
    setPrenom(event.target.value);
  };
  const onNumeroChange = (event) => {
    setNumero(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__contactInfo">
          <div>
            <h2>Contact info</h2>
            <ul className="contact__info">
              <li>
                <span>
                  <LocationOn style={{ fontSize: 24 }} />
                </span>
                <span>
                  108 boulevard de l'océan
                  <br />
                  33115 Pyla sur Mer
                  <br />
                  France
                </span>
              </li>
              <li>
                <span>
                  <Mail style={{ fontSize: 24 }} />
                </span>
                <span>pierre.couach@yachts-exception.com</span>
              </li>
              <li>
                <span>
                  <PhoneInTalk style={{ fontSize: 24 }} />
                </span>
                <span>+33679337551</span>
              </li>
            </ul>
          </div>
          <ul className="contact__sci">
            <li>
              <a href="https://www.facebook.com/yachtsdexception">
                <Facebook style={{ fontSize: 24 }} />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com">
                <Instagram style={{ fontSize: 24 }} />
              </a>
            </li>
            <li>
              <a href="http://linkedin.com">
                <LinkedIn style={{ fontSize: 24 }} />
              </a>
            </li>
          </ul>
        </div>
        <form className="contact__form" onSubmit={handleSubmit} method="POST">
          <h2>Envoyer un message</h2>
          <div className="contact__formBox">
            <div className="contact__inputBox w50">
              <input
                type="text"
                id="nom"
                name="nom"
                required
                value={nom}
                onChange={onNomChange}
              />
              <span>Nom</span>
            </div>
            <div className="contact__inputBox w50">
              <input
                type="text"
                id="prenom"
                name="prenom"
                required
                value={prenom}
                onChange={onPrenomChange}
              />
              <span>Prénom</span>
            </div>
            <div className="contact__inputBox w50">
              <input
                type="text"
                id="email"
                name="email"
                required
                value={email}
                onChange={onEmailChange}
              />
              <span>Adresse mail</span>
            </div>
            <div className="contact__inputBox w50">
              <input
                type="text"
                id="numero"
                name="numero"
                required
                value={numero}
                onChange={onNumeroChange}
              />
              <span>Téléphone</span>
            </div>
          </div>
          <div className="contact__inputBox w100">
            <textarea
              name="message"
              id="message"
              required
              value={message}
              onChange={onMessageChange}
            ></textarea>
            <span>Ecrivez votre message ici...</span>
          </div>
          <div className="contact__inputButton w100">
            <button className="contact__button" type="submit">
              <div className="contact__buttonText">Envoyer</div>
              <Send />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
