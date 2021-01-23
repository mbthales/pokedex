import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const PokemonsContainer = () => {
  const pokemonsInfo = useSelector(({ pokemonsInfo }) => pokemonsInfo);
  const dispatch = useDispatch();

  const getPokemonDetailsSelected = id => {
    dispatch({
      type: "getPokemonDetailsSelected",
      payload: id
    });
  };

  return (
    pokemonsInfo.map(({ id, name, image }) => (
      <Link to="/pokemon-details" onClick={() => getPokemonDetailsSelected(id)} key={id}>
        <div>
          <p>{name}</p>
          <img src={image}/>
        </div>
      </Link>
    ))
  )    
};

export default PokemonsContainer;