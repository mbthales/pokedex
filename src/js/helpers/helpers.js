import axios from "axios";

const getPokemonsUrls = async(url) => {
  const response = await axios.get(url);
  const data = await response.data;

  return {
    type: "getPokemonsUrls",
    payload: {
      urlDefault: data.next? data.next: null,
      pokemonsUrls: data.results.map(result => result.url)
    }
  }
};

const getPokemonsInfo = async(pokemonsUrls) => {
  const response = await axios.all(pokemonsUrls.map(url => axios.get(url)));
  const data = response.map(res => res.data);

  return {
    type: "getPokemonsInfo",
    payload: filterPokemonsInfo(data)
  }
};

const filterPokemonsInfo = data=> {
  return data.map(({ name, id, sprites, types, moves}) => ({
    name,
    id,
    image: sprites.front_default,
    types,
    moves
  }))
};

export { getPokemonsUrls, getPokemonsInfo };