import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkToPokemonDetail = styled(Link)`
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

const PokemonName = styled.h2`
  color: #131111;
  font-size: 1.2rem;
  padding-top: 10px;
  font-weight: normal;
`;

const PokemonImg = styled.img`
  width: 100px;
  height: 100px;
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

export { LinkToPokemonDetail, PokemonName, PokemonImg, LoadingMsg, BtnMorePokemons };