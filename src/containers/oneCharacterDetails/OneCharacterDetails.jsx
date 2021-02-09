import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDetails } from '../../services/rickAndMortyApi';
import Details from '../../components/details/Details';

const OneCharacterDetails = ({ match }) => {

  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    getDetails(match.params.details)
      .then((quote) => {
        setQuote(quote);
        setLoading(false);
      });
  }, []);

  if(loading) return <h1>Character loading</h1>;
  return (
    <>
      <h1>{loading}</h1>
      <Details 
        id={quote.id}
        name={quote.name}
        species={quote.species}
        image={quote.image}
        status={quote.status}
      />
    </>
  );
};

OneCharacterDetails.propTypes = {
  match: PropTypes.object
};

export default OneCharacterDetails;
