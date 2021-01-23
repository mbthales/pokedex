import React from "react";
import { useSelector, useDispatch } from "react-redux";

import PokemonsContainer from "./PokemonsContainer";

import { getPokemonsUrls } from "../helpers/helpers";

const Home = () => {
  const url = useSelector(({ urlDefault }) => urlDefault);

  const dispatch = useDispatch();
  
  return(
    <>
      <h1>Pokedex</h1>
      <button onClick={async() => dispatch(await getPokemonsUrls(url))}>
        Get More Pokemons
      </button>
      <PokemonsContainer></PokemonsContainer>
    </>
  )
};

export default Home;