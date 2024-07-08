import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json'
import Ratings from '../components/Ratings';
import Slider from '../components/Slider';
import Property from '../components/Property';
import HostInfo from '../components/Host';
import PropertyInfo from '../components/PropertyInfo';


function LogementDetails() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  if (!logement) {
    return <Navigate to="/error" />; 
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
      <PropertyInfo description={logement.description} equipments={logement.equipments} />
     </div>
    
    
  );
}

export default LogementDetails;