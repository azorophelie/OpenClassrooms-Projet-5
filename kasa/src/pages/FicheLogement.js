import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json'
import Slider from '../components/Slider';

function LogementDetails() {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  if (!logement) {
    return <p>Logement non trouvé</p>;
  }

  return (
    <div>
     
      <Slider images={logement.pictures} />
      

    </div>
  );
}

export default LogementDetails;