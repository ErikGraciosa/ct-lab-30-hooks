import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ name, image, species, status }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image} />
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </div>
  );
};

Details.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string
};

export default Details;
