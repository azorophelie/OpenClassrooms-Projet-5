import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const PropertyEquipments = ({ equipments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="equipments">
      <div className="equipments-title" onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        <h2>Équipements</h2>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="arrow" />
      </div>
      {isOpen && (
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PropertyEquipments;