import React from "react";
import "./MentionsLegales.css";

const MentionsLegales = () => {
  return (
    <div className="mentionslegales">
      <div className="max-width">
        <div className="mentionslegales__container">
          <div className="mentionslegales__content">
            <h3 className="mentionslegales__title">Confidentialité</h3>
            <ul className="mentionslegales__list">
              <li className="mentionslegales__listItems">
                Yachts d'Exception SARL au capital de 6000 €
              </li>
              <li className="mentionslegales__listItems">
                RCS : Bordeaux 501 233 035
              </li>
              <li className="mentionslegales__listItems">
                SIRET : 501 233 035 00010
              </li>
              <li className="mentionslegales__listItems">
                Directrice de publication : Anne Fourneau
              </li>
              <li className="mentionslegales__listItems">
                108 Boulevard de l'Ocean – 33115 Pyla sur Mer – France
              </li>
              <li className="mentionslegales__listItems">
                Tél. +33 (0)5 57 52 40 77
              </li>
              <li className="mentionslegales__listItems">
                contact@yachts-exception.com
              </li>
            </ul>
            <h3 className="mentionslegales__title">Copyrights</h3>
            <p className="mentionlegales__paragraph">
              Tous les textes publiés sur le site internet sont la propriété de
              la SARL Yachts d'Exception.
              <br />
              La marque Yachts d'Exception est déposée à l’INPI (Institut
              national de la propriété industrielle).
            </p>
            <h3 className="mentionslegales__title">Hébergeur</h3>
            <p className="mentionlegales__paragraph">
              L’ensemble des contenus du site est hébergé par la SAS OVH
              <br />2 rue Kellerman – BP 80157 – 59100 Roubaix – France
            </p>
            <h3 className="mentionslegales__title">Collecte de données</h3>
            <p className="mentionlegales__paragraph">
              Certaines données récoltées font l’objet d’un traitement
              informatique destiné à permettre à Yachts d'Exception
              l’instruction de votre demande.
              <br />
              Elles sont uniquement destinées à la société Yachts d'Exception et
              ne sont pas communiquées à des tiers.
              <br />
              Vous pouvez exercer votre droit d’accès et de rectiﬁcation aux
              informations qui vous concernent en vous adressant à la société :
              <br />
              SARL Yachts d'Exception – 108 Boulevard de l'Ocean – 33115 Pyla
              sur Mer – France
              <br />
              ou par email : contact@yachts-exception.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
