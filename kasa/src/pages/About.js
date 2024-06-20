import React from 'react';
import image from '../images/Banner_a_propos.png';

import Styles from '../SCSS/main.scss';
import Collapse from '../components/Collapse';


const About = () => (
  <div className={Styles.about}>
  <div className="container" id="image-container">
      <img src={image} alt="banner" className="banner" id="banner" />
  <div className="container">
        <img src="/path/to/banner.jpg" alt="banner" className="banner" id="banner" />
        
      </div>

     
    </div>
    <div>
      <Collapse title="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et 
          toutes les informations sont regulièrement vérifiées pars nos équipes.</p>
      </Collapse>
      <Collapse title="Respect">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
          perturbation du voisinage entraînera une exclusion de notre plateforme</p>
      </Collapse>
      <Collapse title="Service">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
          perturbation du voisinage entraînera une exclusion de notre plateforme</p>
      </Collapse>
      <Collapse title="Sécurité">
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes. 
        </p>
      </Collapse>
      </div>
    
   
  </div>
);

export default About;
