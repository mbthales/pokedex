import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const PokemonTypes = styled.li`
  background-color: ${({ typeName }) => typeName === "fire"? "#f07f2f": 
  typeName === "water"? "#6890f0": typeName === "normal"? "#a9a878": 
  typeName === "poison"? "#a040a1": typeName === "bug"? "#a8b821":
  typeName === "flying"? "#a890f0": typeName === "fighting"? "#c02f29":
  typeName === "grass"? "#77c850": typeName === "electric"? "#f9d02f":
  typeName === "ground"? "#e0c169": typeName === "psychic"? "#f85888":
  typeName === "rock"? "#b7a038": typeName === "ice"? "#98d8d8":
  typeName === "dragon"? "#7038f9": typeName === "ghost"? "#7038f9":
  typeName === "dark"? "#6f5848": typeName === "steel"? "#b8b8d1":
  "transparent"}
`;

const PokemonStats = styled.li`
  width: ${({ baseStat }) => `${baseStat}%`};
  background-color: red;
`

const Test = () => {
  const { name, image, types, weight, stats } = useSelector(({ pokemonDetailsSelected }) => pokemonDetailsSelected);

  return(
    <>
      <Link to="/"><button>Volte</button></Link>
      <div>
        <h1>{name}</h1>
        <img src={image}/>
        <ul>
          {types.map((type, i) => <PokemonTypes typeName={type} key={i}>{type}</PokemonTypes>)}
        </ul>
        <p>{weight}kg</p>
        <ul>
          {stats.map(({ baseStat, nameStat }, i) => <PokemonStats key={i} baseStat={baseStat}>{nameStat}</PokemonStats>)}
        </ul>
      </div>
    </>
  )
}

export default Test;