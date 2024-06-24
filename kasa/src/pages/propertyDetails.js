import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json'
import Ratings from '../components/Ratings';
import Slider from '../components/Slider';
import Property from '../components/Property';
import HostInfo from '../components/Host';
import Description from '../components/Description';
import Equipments from '../components/Equipment';
import '../SCSS/main.scss';

function LogementDetails() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  if (!logement) {
    return <Navigate to="/error" />; // Rediriger vers la page d'erreur
  }

   
  return (
    
      <div className="property-detail">
      <Slider images={logement.pictures} />
      <div className="property-main-info">
        <div className="logement-info">
        <Property title={logement.title} location={logement.location} tags={logement.tags} />
          
        </div>
        <div className="logement-host">
          <HostInfo host={logement.host} />
          <div className="logement-rating">
            <Ratings rating={logement.rating} />
          </div>
        </div>
       
      </div>
      <div className="description-equipments">
      <Description description={logement.description} />
      <Equipments equipments={logement.equipments} />
     </div>
    
    </div>
  );
}

export default LogementDetails;