import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getPokemonsUrls } from "../helpers/helpers";

const PokemonBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: #DEDEDE;
  display: inline-flex;
  justify-content: center;
  margin: 60px 85px;
  border-radius: 3px;
  position: relative;

  &:hover{
    transform: scale(1.2);
    box-shadow: 0px 0px 6px 1px #131111;
    cursor: pointer;
  }
`;

const PokemonName = styled.h3`
  color: #131111;
  font-size: 1.2rem;
  padding-top: 10px;
  font-weight: normal;
`;

const PokemonImg = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 0;
`;

const LoadingMsg = styled.p`
  margin-bottom: 30px;
`;

const BtnMorePokemons = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #E5E5E5;
  font-family: "Sen", sans-serif;
  font-size: 1rem;
  margin-bottom: 30px;

  &:hover{
    border-bottom: 2px solid #000;
    cursor: pointer;
  } 
`;

const PokemonsContainer = () => {
  const [isLoadingMorePokemons, setIsLoadingMorePokemons] = useState(false);

  const urlDefault = useSelector(({ urlDefault }) => urlDefault);
  const pokemonsInfo = useSelector(({ pokemonsInfo }) => pokemonsInfo);

  const dispatch = useDispatch();

  const getPokemonDetailsSelected = id => {
    dispatch({
      type: "getPokemonDetailsSelected",
      payload: id
    });
  };

  useEffect(() => {
    setIsLoadingMorePokemons(false);
  }, [pokemonsInfo]);

  return (
    <main>
      {
        pokemonsInfo.map(({ id, name, image }) => (
          <Link to="/pokemon-details" onClick={() => getPokemonDetailsSelected(id)} key={id}>
            <PokemonBox>
              <PokemonName>{name}</PokemonName>
              <PokemonImg src={image}/>
            </PokemonBox>
          </Link>
        ))        
      }
      {
        urlDefault && !isLoadingMorePokemons?
        <BtnMorePokemons onClick={async() => {
          dispatch(await getPokemonsUrls(urlDefault));
          setIsLoadingMorePokemons(true);
        }}>
          Get More Pokemons
        </BtnMorePokemons> 
        :<LoadingMsg>Loading...</LoadingMsg>        
      }
    </main>
  )    
};

export default PokemonsContainer;