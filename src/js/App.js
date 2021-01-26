import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled, { createGlobalStyle } from 'styled-components';

import Home from "./Components/Home";
import PokemonDetails from "./Components/PokemonDetails";

import { getPokemonsUrls, getPokemonsInfo } from "./helpers/helpers";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    line-height: 1.5;
    text-decoration: none;
  }

  html{
    font-size: 20px;
    font-family: "Sen", sans-serif;

    @media(min-width: 768px) {
      font-size: 18px;
    }

    @media(min-width: 1024px) {
      font-size: 16px;
    }
  }

  body{
    background-color: #E5E5E5;
    text-align: center;
  }
`

const App = () => {
  const urlDefault = useSelector(({ urlDefault }) => urlDefault);
  const pokemonsUrls = useSelector(({ pokemonsUrls }) => pokemonsUrls);


  const dispatch = useDispatch();

  useEffect(async() => {
    dispatch(await getPokemonsUrls(urlDefault));
  }, []);

  useEffect(async() => {
    if(pokemonsUrls.length > 0){
      dispatch(await getPokemonsInfo(pokemonsUrls));
    }
  }, [pokemonsUrls]);

  return(
    <>
      <Router>
        <GlobalStyle></GlobalStyle>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/pokemon-details">
            <PokemonDetails></PokemonDetails>
          </Route>
        </Switch>
      </Router>
    </>
  )
};

export default App;