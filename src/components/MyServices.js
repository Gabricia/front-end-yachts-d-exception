import React from "react";
import "./MyServices.css";
import { Link } from "react-router-dom";

const MyServices = () => {
  return (
    <div className="myservices">
      <section className="myservices__section">
        <div className="max-width">
          <h2 className="title">Nos services</h2>
          <div className="myservices__content">
            <Link className="myservices__card" to="/home">
              <div className="myservices__box">
                <i className="fas fa-ship"></i>
                <div className="myservices__text">Acheter un Yacht</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </Link>
            <Link className="myservices__card" to="/sur-mesure">
              <div className="myservices__box">
                <i className="fas fa-anchor"></i>
                <div className="myservices__text">Construire un Yacht</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </Link>
            <Link className="myservices__card" to="/contact">
              <div className="myservices__box">
                <i className="fas fa-handshake"></i>
                <div className="myservices__text">Vendre un Yacht</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyServices;
