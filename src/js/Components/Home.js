import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import PokemonsContainer from "./PokemonsContainer";

const Header = styled.header`
  height: 200px;
  background-color: #A42323;
`;

const Title = styled.h1`
  line-height: 200px; 
  font-size: 3rem;
  color: #FAF9F9;
`;

const LoadingMsg = styled.p`
  margin-top: 60px;
`;

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