import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Test = () => {
  const { name, image, types, moves } = useSelector(({ pokemonDetailsSelected }) => pokemonDetailsSelected);

  return(
    <>
      <Link to="/"><button>Volte</button></Link>
      <div>
        <h1>{name}</h1>
        <img src={image}/>
        <ul>
          {types.map(type => <li>{type}</li>)}
        </ul>
        <ul>
          {moves.map(move => <li>{move}</li>)}
        </ul>
      </div>
    </>
  )
}

export default Test;