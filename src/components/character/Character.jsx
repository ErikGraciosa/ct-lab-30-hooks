import React from 'react';
import PropTypes from 'prop-types';
import './Character.css';

function Character({ name, image, id }) {
  return (
    <a href={id}>{name}
      <img src={image} />
    </a>
  );
}

Character.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number
};

export default Character;
