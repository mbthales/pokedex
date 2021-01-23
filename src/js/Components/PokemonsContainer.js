import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PokemonsContainer = () => {
  const pokemonsInfo = useSelector(({ pokemonsInfo }) => pokemonsInfo);

  return (
    pokemonsInfo.map(({ id, name, image }) => (
      <div key={id}>
        <Link to="/pokemon-details"><p>{name}</p></Link>
        <img src={image}/>
      </div>
    ))
  )    
  
};

export default PokemonsContainer;