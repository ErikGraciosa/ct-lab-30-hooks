import React from 'react';
import Character from '../../components/character/Character';

const AllCharacters = () => {


  
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
