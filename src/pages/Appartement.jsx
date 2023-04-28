import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import chambres from "../Fetch.json";
import Erreur from "./Erreur";
import Collapse from "../components/Collapse";
import "../style/Appartement.css"
import Tag from "../components/Tag";
import Host from "../components/Host";
import Rating from "../components/Rating";

const Appartement = () => {
  const { chambreid } = useParams();
  const chambre = chambres.find((chambre) => chambre.id === chambreid);
  if (!chambre) {
    return (
      <div>
        <Erreur />
      </div>
    );
  }
  const { title, location, description, equipments,host, rating } =
    chambre;
  return (
    <div className="appartement_full">
      <Slideshow />
      <div className="appartement_info">
        <div className="appart_title">
          <h2>{title}</h2>
          <p className="location">{location}</p>
          <Tag/>
        </div>
        <div className="info_host">
          <Host host={host}/>
          <Rating rating={rating}/>
        </div>
      </div>
      <div className="collapse_double">
      <Collapse title="Description">{description}</Collapse>
      <Collapse title="Equipements">
        {equipments.map((equipment) => (
          <p key={equipment}>{equipment}</p>
        ))}
      </Collapse>
      </div>
    </div>
  );
};

export default Appartement;