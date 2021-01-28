import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPokemonsUrls } from "../../helpers/helpers";

import { LinkToPokemonDetail, LoadingMsg, BtnMorePokemons } from './PokemonsContainerStyle'

const PokemonsContainer = () => {
  const [isLoadingMorePokemons, setIsLoadingMorePokemons] = useState(false);

  const urlDefault = useSelector(({ urlDefault }) => urlDefault);
  const pokemonsInfo = useSelector(({ pokemonsInfo }) => pokemonsInfo);

  const dispatch = useDispatch();

  const getPokemonDetailsSelected = id => {
    dispatch({
      type: "getPokemonDetailsSelected",
      payload: id
    });
  };

  useEffect(() => {
    setIsLoadingMorePokemons(false);
  }, [pokemonsInfo]);

  return (
    <main>
      {
        pokemonsInfo.map(({ id, name, image }) => (
          <LinkToPokemonDetail 
            key={id}  
            onClick={() => getPokemonDetailsSelected(id)} 
            to="/pokemon-details" 
          >
            <div>
              <h2>{name}</h2>
                <img src={image}/>
            </div>
          </LinkToPokemonDetail>
        ))        
      }
      {
        urlDefault && !isLoadingMorePokemons?
        <BtnMorePokemons onClick={async() => {
          dispatch(await getPokemonsUrls(urlDefault));
          setIsLoadingMorePokemons(true);
        }}>
          Get More Pokemons
        </BtnMorePokemons> 
        :<LoadingMsg>Loading...</LoadingMsg>        
      }
    </main>
  )    
};

export default PokemonsContainer;