import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Home from "./Components/Home";
import PokemonDetails from "./Components/PokemonDetails";

import { getPokemonsUrls, getPokemonsInfo } from "./helpers/helpers";

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