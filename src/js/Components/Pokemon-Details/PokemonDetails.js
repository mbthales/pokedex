import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DefaultCss, PokemonTypes, PokemonStats, 
  LinkToReturn, PokemonName, PokemonImg } from './PokemonDetailsStyle';

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
      <div>
        <PokemonName>{name}</PokemonName>
        <PokemonImg src={image}/>
        <p>Weight: {weight}kg</p>
        <div>
        <p>Types:</p>
          <ul>
            {types.map((type, i) => <PokemonTypes typeName={type} key={i}>{type}</PokemonTypes>)}
          </ul>
        </div>
        <ul>
          {stats.map(({ baseStat, nameStat }, i) => <PokemonStats key={i} baseStat={baseStat}>{nameStat}</PokemonStats>)}
        </ul>
      </div>
    </main>
  )
}

export default PokemonDetails;