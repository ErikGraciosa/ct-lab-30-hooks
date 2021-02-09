import React, { useEffect, useState } from 'react';
import Character from '../../components/character/Character';
import { getAllCharacters } from '../../services/rickAndMortyApi';

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

  console.log(loading);
  console.log(quotes);

  return (
    <div>
      <h1>Placeholder All Chars</h1>
      <Character 
        key="1"
        name="Steve"
        image="picture"
        id="1"/>
    </div>
  );
};

export default AllCharacters;
