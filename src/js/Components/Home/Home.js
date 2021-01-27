import React from "react";
import { useSelector } from "react-redux";

import PokemonsContainer from "../Pokemons-Container/PokemonsContainer";

import { Header, Title, LoadingMsg } from './HomeStyle';

const Home = () => {
  const pokemonsInfo = useSelector(({ pokemonsInfo }) => pokemonsInfo);

  return(
    <>
      <Header>
        <Title>Pokedex</Title>
      </Header>
      {
        pokemonsInfo.length > 0?
        <PokemonsContainer></PokemonsContainer>
        :<LoadingMsg>Loading...</LoadingMsg>
      }
    </>
  );
};

export default Home;