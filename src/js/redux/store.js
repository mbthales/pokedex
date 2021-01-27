import { createStore } from "redux";

const initialState = {
  urlDefault: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
  pokemonsUrls: [],
  pokemonsInfo: [],
  pokemonDetailsSelected: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "getPokemonsUrls":
      return{
        ...state,
        urlDefault: payload.urlDefault,
        pokemonsUrls: payload.pokemonsUrls
      };
    case "getPokemonsInfo":
      return {
        ...state,
        pokemonsInfo: state.pokemonsInfo.concat(payload)
      }
    case "getPokemonDetailsSelected":
      return{
        ...state,
        pokemonDetailsSelected: state.pokemonsInfo.filter(({ id }) => id === payload)[0]
      }
    default:
      return state;
  }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;