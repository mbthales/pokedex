import React from "react";
import { useSelector } from "react-redux";

import { DefaultCss, PokemonTypes, PokemonStats, 
  LinkToReturn, PokemonWrapper } from "./PokemonDetailsStyle";

const PokemonDetails = () => {
  const { name, image, types, weight, stats } = 
    useSelector(({ pokemonDetailsSelected }) => pokemonDetailsSelected);

  return(
    <main>
      <DefaultCss></DefaultCss>
      <LinkToReturn to="/">&#10094;</LinkToReturn>
      <PokemonWrapper>
        <h1>{name}</h1>
        <div>
          <img src={image} alt={`${name} image`}/>
          <div>
            <h2>Weight: <span>{weight}kg</span></h2>
            <section>
              <h2>Types:</h2>
              <ul>
                {types.map((type, i) => 
                  <PokemonTypes typeName={type} key={i}>{type}</PokemonTypes>)
                }
              </ul>
            </section>
          </div>
        </div>
        <section>
          <h2>Stats:</h2>
          <ul>
            {stats.map(({ baseStat, nameStat }, i) => <PokemonStats key={i} baseStat={baseStat}>{nameStat}</PokemonStats>)}
          </ul>
        </section>
      </PokemonWrapper>
    </main>
  )
}

export default PokemonDetails;