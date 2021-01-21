import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [urlDefault, setUrlDefault] = 
    useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
  const [pokemonsUrl, setPokemonsUrl] = useState([]);
  const [pokemonsInfo, setPokemonsInfo] = useState([]);

  const getPokemonsUrl = async() => {
    const response = await axios.get(urlDefault);
    const data = await response.data;

    if(data.next) setUrlDefault(data.next);
    setPokemonsUrl(data.results.map(result => result.url));
  };

  const getPokemonsInfo = async() => {
    const response = await axios.all(pokemonsUrl.map(url => axios.get(url)));
    const data = response.map(res => res.data);

    filterPokemonsInfo(data);
  };

  const filterPokemonsInfo = data => {
    const pokemons = pokemonsInfo.concat(data.map(i => ({
      name: i.name,
      id: i.id,
      image: i.sprites.front_default,
      types: i.types,
      moves: i.moves
    })))

    setPokemonsInfo(pokemons);
  }

  useEffect(async() => {
    getPokemonsUrl();
  }, [])

  useEffect(async() => {
    getPokemonsInfo();
  },[pokemonsUrl])

  return(
    <>
      <p>Hello World!</p>
      <button onClick={() => getPokemonsUrl()}>Clique</button>
    </>
  )
};

export default App;