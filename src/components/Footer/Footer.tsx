import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitch } from '@fortawesome/free-brands-svg-icons';

  <FontAwesomeIcon icon={faFacebook} size="2x" color="#fff" />;

export default function Footer() {
  return (
    <div>
      <h1>This is the footer</h1>
      <FontAwesomeIcon icon={faFacebook} size="2x" color="#FF0099" />
      <FontAwesomeIcon icon={faTwitch} size="2x" color="#FF0099" />
    </div>
  );
}
