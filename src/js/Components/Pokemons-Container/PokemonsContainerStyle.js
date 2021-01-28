import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from '../../AppStyle';

const LinkToPokemonDetail = styled(Link)`
  width: 200px;
  height: 200px;
  background-color: ${colors.quaternary};
  display: inline-flex;
  justify-content: center;
  margin: 30px 30px;
  padding: 40px;

  border-radius: 3px;
  position: relative;

  &:hover{
    transform: scale(1.2);
    box-shadow: 0px 0px 6px 1px #131111;
    cursor: pointer;
  }

  h2 {
    color: #131111;
    font-size: 1.2rem;
    font-weight: normal;
  }
`;

const LoadingMsg = styled.p`
  margin-bottom: 30px;
`;

const BtnMorePokemons = styled.button`
  display: block;
  margin: 0 auto;
  background-color: transparent;
  margin-bottom: 30px;

  font-family: "Sen", sans-serif;
  font-size: 1rem;

  &:hover{
    border-bottom: 2px solid #000;

    cursor: pointer;
  } 
`;

export { LinkToPokemonDetail, LoadingMsg, BtnMorePokemons };