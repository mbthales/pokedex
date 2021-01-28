import styled, { createGlobalStyle }  from "styled-components";
import { Link } from "react-router-dom";

import { colors } from '../../AppStyle';

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
  fairy: "#e38ee2"
};

const PokemonTypes = styled.li`
  background-color: ${({ typeName }) => pokemonTypesColors[typeName]};
  width: 150px;
  font-size: 1vw;
`;

const PokemonStats = styled.li`
  width: ${({ baseStat }) => `${baseStat}%`};
  background-color: ${colors.primary};
  color: ${colors.secundary};
`;

const LinkToReturn = styled(Link)`
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: transparent;
  font-size: 1.5rem;
  color: ${colors.quinary};
  font-weight: bold;
`;

const PokemonWrapper = styled.div`
  text-align: center;
  padding: 0 30px;
  
  h2{
    font-size: 1.2rem;
    color: ${colors.quinary};
    font-weight: normal;
  }

  img{
    width: 200px;
    height: 200px;
  }

  p~p{
    margin-top: 20px;
  }

  p{
    text-align: left;
    font-weight: bold;
    font-size: 0.9rem;

    span{
      font-weight: normal;
    }
  }

  li{
    height: 30px;
    border-radius: 3px;
    font-size: 0.7rem;
    line-height: 30px;
    margin-bottom: 5px;
  }
`;

export { DefaultCss, PokemonTypes, PokemonStats, LinkToReturn, PokemonWrapper };