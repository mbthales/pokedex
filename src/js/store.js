import { createStore } from 'redux';

const initialState = {
  urlDefault: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
  pokemonsUrls: [],
  pokemonsInfo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getPokemonsUrls":
      return{
        ...state,
        urlDefault: action.payload.urlDefault,
        pokemonsUrls: action.payload.pokemonsUrls
      };
    case "getPokemonsInfo":
      return {
        ...state,
        pokemonsInfo: state.pokemonsInfo.concat(action.payload)
      }
    default:
      return state;
  }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;