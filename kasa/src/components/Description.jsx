import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const PropertyDescription = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="description">
    <div className="description-title" onClick={toggleExpand}>
      <h2>Description</h2>
      <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="arrow" />
    </div>
    {isOpen && <p>{description}</p>}
  </div>
);
};

export default PropertyDescription;
