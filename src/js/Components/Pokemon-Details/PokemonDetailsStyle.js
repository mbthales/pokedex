import styled, { createGlobalStyle }  from "styled-components";
import { Link } from "react-router-dom";

const DefaultCss = createGlobalStyle`
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
  background-color: #A42323;
  color: #FAF9F9;
`;

const LinkToReturn = styled(Link)`
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: transparent;
  font-size: 1.5rem;
  color: #131111;
  font-weight: bold;
`;

const PokemonName = styled.h2`
  font-size: 1.2rem;
  color: #131111;
  font-weight: normal;
`;

const PokemonImg = styled.img`
  width: 150px;
  height: 150px;
`;

export { DefaultCss, PokemonTypes, PokemonStats, LinkToReturn, PokemonName, PokemonImg };