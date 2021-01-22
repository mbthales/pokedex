import React from 'react';

const PokemonsContainer = ({ pokemons }) => {
  return (
    pokemons.map(({ id, name, image }) => (
      <div key={id}>
        <p>{name}</p>
        <img src={image}/>
      </div>
    ))
  )
};

export default PokemonsContainer;