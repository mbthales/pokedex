import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root{
    width: 100%;
    height: 100%;
  }

  #root{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main{
    width: 100%;
    max-width: 800px;
  }
`;

const pokemonTypesColors = {
  fire: "#f07f2f",
  water: "#6890f0",
  normal: "#a9a878",
  poison: "#a040a1",
  bug: "#a8b821",
  flying: "#a890f0",
  fighting: "#c02f29",
  grass: "#77c850",
  electric: "#f9d02f",
  ground: "#e0c169",
  psychic: "#f85888",
  rock: "#b7a038",
  ice: "#98d8d8",
  dragon: "#7038f9",
  ghost: "#705798",
  dark: "#6f5848",
  steel: "#b8b8d1",
};

const PokemonTypes = styled.li`
  background-color: ${({ typeName }) => pokemonTypesColors[typeName]}
`;

const PokemonStats = styled.li`
  width: ${({ baseStat }) => `${baseStat}%`};
  background-color: red;
`;

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
      <GlobalStyle></GlobalStyle>
      <Link to="/"><button>&#10094;</button></Link>
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
    </main>
  )
}

export default PokemonDetails;