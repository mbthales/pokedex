import React from "react";
import { useSelector } from "react-redux";

import PokemonsContainer from "../Pokemons-Container/PokemonsContainer";

import { Header, LoadingMsg } from "./HomeStyle";

const Home = () => {
  const pokemonsInfo = useSelector(({ pokemonsInfo }) => pokemonsInfo);

  return(
    <>
      <Header>
        <h1>Pokedex</h1>
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