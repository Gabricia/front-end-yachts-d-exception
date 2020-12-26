import React from "react";
import "./Apropos.css";
import {Link} from "react-router-dom"

const Apropos = () => {
  return (
    <div className="apropos">
      <section className="apropos__section" >
        <div className="max-width">
          <h2 className="title">A propos</h2>
          <div className="apropos__content">
            <div className="apropos__column left">
              <div className="apropos__img"></div>
            </div>
            <div className="apropos__column right">
              <div className="apropos__text">Pierre COUACH, fondateur</div>
              <p className="apropos__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                ut voluptatum eveniet doloremque autem excepturi eaque, sit
                laboriosam voluptatem nisi delectus. Facere explicabo hic minus
                accusamus alias fuga nihil dolorum quae. Explicabo illo unde,
                odio consequatur ipsam possimus veritatis, placeat, ab molestiae
                velit inventore exercitationem consequuntur blanditiis omnis
                beatae. Dolor iste excepturi ratione soluta quas culpa
                voluptatum repudiandae harum non. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quasi ut voluptatum eveniet
                doloremque autem excepturi eaque, sit laboriosam voluptatem nisi
                delectus. Facere explicabo hic minus accusamus alias fuga nihil
                dolorum quae. Explicabo illo unde, odio consequatur ipsam
                possimus veritatis, placeat, ab molestiae velit inventore
                exercitationem consequuntur blanditiis omnis beatae. Dolor iste
                excepturi ratione soluta quas culpa voluptatum repudiandae harum
                non.
              </p>
              <Link className="apropos__button" to="/aboutus">
                Nos engagements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apropos;
