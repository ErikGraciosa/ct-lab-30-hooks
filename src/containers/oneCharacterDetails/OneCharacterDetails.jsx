import React, { useState, useEffect } from 'react';
import { getDetails } from '../../services/rickAndMortyApi';
import Details from '../../components/details/Details';

const OneCharacterDetails = () => {

  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    getDetails(1)
      .then((quote) => {
        setQuote(quote.results);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>{loading}</h1>
      <Details 
        id={'quote.id'}
        name={'quote.name'}
        species={'quote.species'}
        image={'quote.image'}
        status={'quote.status'}
      />
    </>
  );
};

export default OneCharacterDetails;
