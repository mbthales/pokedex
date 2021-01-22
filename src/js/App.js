import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Home from "./Components/Home";
import PokemonDetails from "./Components/PokemonDetails";

import { getPokemonsUrls } from "./helpers/helpers";

const App = () => {
  const urlDefault = useSelector(({ urlDefault }) => urlDefault);
  const dispatch = useDispatch();

  useEffect(async() => {
    dispatch(await getPokemonsUrls(urlDefault));
  }, []);

  return(
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* <Route path="/PokemonDetails">
            <PokemonDetails></PokemonDetails>
          </Route> */}
        </Switch>
      </Router>
    </>
  )
};

export default App;