import React, { useEffect, useState } from 'react';
import Character from '../../components/character/Character';

const AllCharacters = () => {
  const [loading, setLoading] = useState(true); //initialize loading to true
  const [quotes, setQuotes] = useState([]); //initialize quotes to empty string

  useEffect(() => {
    const character = fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json());
    console.log(character);
    setLoading(false);

  }, []);

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
