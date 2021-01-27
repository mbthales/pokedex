import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./Components/Home/Home";
import PokemonDetails from "./Components/Pokemon-Details/PokemonDetails";

import { getPokemonsUrls, getPokemonsInfo } from "./helpers/helpers";

import DefaultCss from './AppStyle';

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
    };
  }, [pokemonsUrls]);

  return(
    <Router>
      <DefaultCss></DefaultCss>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/pokemon-details">
          <PokemonDetails></PokemonDetails>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;