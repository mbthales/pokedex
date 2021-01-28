import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DefaultCss, PokemonTypes, PokemonStats, 
  LinkToReturn, PokemonName, PokemonImg, PokemonWrapper } from './PokemonDetailsStyle';

const PokemonDetails = () => {
  const { name, image, types, weight, stats } = 
    useSelector(({ pokemonDetailsSelected }) => pokemonDetailsSelected);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "getCurrentPage",
      payload: window.location.pathname,
    })
  }, [])

  return(
    <main>
      <DefaultCss></DefaultCss>
      <LinkToReturn to="/">&#10094;</LinkToReturn>
      <PokemonWrapper>
        <h2>{name}</h2>
        <img src={image}/>
        <p>Weight: <span>{weight}kg</span></p>
        <p>Types:</p>
        <ul>
          {types.map((type, i) => <PokemonTypes typeName={type} key={i}>{type}</PokemonTypes>)}
        </ul>
        <p>Stats:</p>
        <ul>
          {stats.map(({ baseStat, nameStat }, i) => <PokemonStats key={i} baseStat={baseStat}>{nameStat}</PokemonStats>)}
        </ul>
      </PokemonWrapper>
    </main>
  )
}

export default PokemonDetails;