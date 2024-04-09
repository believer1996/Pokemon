import { React, useEffect, useState } from "react";
import { fetchPokemonDetail } from "../../apis/pokemons";
import './pokemoncard.css'
import { Button } from "../button";
export function PokemonCard({ pokemonUrl,handleKnowMore }) {

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetchPokemonDetail(pokemonUrl).then((pokemon) => {
      setPokemon(pokemon);
    });
  }, []);
  if(!pokemon){
    return null;                     
  }

const {id,name,type,imageUrl}=pokemon;

  return (
      <div className={`pokemon-card-container ${type}`}>

        <div className="pokemon-id-container">
          <small>#{id}</small>
        </div>
        <img className="pokemon-image"
          src={imageUrl}
          alt={name}
        />
        <h3 className="pokemon-name">{name.toUpperCase()}</h3>
        <small>Type:{name}</small>
        {/*<KnowMoreButton />*/}
        <Button style={{}} handleClick={()=>{handleKnowMore(pokemon)}} title="know more"/>
      </div>
    )
}
