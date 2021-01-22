import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPokemonsInfo } from "../helpers/helpers";

const PokemonsContainer = () => {
  const pokemonsUrls = useSelector(({ pokemonsUrls }) => pokemonsUrls);
  const pokemonsInfo = useSelector(({ pokemonsInfo }) => pokemonsInfo);

  const dispatch = useDispatch();

  useEffect(async() => {
    dispatch(await getPokemonsInfo(pokemonsUrls));
  }, [pokemonsUrls]);

  return (
    pokemonsInfo.map(({ id, name, image }) => (
      <div key={id}>
        <p>{name}</p>
        <img src={image}/>
      </div>
    ))
  )    
  
};

export default PokemonsContainer;