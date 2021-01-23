import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PokemonsContainer = () => {
  const pokemonsInfo = useSelector(({ pokemonsInfo }) => pokemonsInfo);

  return (
    pokemonsInfo.map(({ id, name, image }) => (
      <Link to="/pokemon-details" onClick={() => console.log(id)} key={id}>
        <div>
          <p>{name}</p>
          <img src={image}/>
        </div>
      </Link>
    ))
  )    
};

export default PokemonsContainer;