import React, { useEffect, useState } from 'react';
import Character from '../../components/character/Character';
import { getAllCharacters } from '../../services/rickAndMortyApi';
import styles from './AllCharacters.css';

const AllCharacters = () => {
  const [loading, setLoading] = useState(true); //initialize loading to true
  const [quotes, setQuotes] = useState([]); //initialize quotes to empty string

  useEffect(() => {
    getAllCharacters()
      .then((quotes) => {
        setQuotes(quotes.results);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className={styles.AllCharacters}>
        {quotes.map(quote => 
          <Character 
            key={quote.id} 
            name={quote.name}
            image={quote.image}
            id={quote.id} />
        )}
      </div>
    </>
  );
};

export default AllCharacters;
