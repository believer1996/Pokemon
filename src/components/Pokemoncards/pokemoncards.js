import React, { useEffect, useState } from "react";
import { fetchPokemons } from "../../apis";
import { PokemonCard } from "./pokemoncard";
import { PokemonDetailModal } from "../pokemondetails";

export function PokemonCards() {
  const [offset, setOffSet] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();

  const handleKnowMore = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    console.log(offset, "off");
    fetchPokemons(offset, 20).then((data) => {
      setPokemons((prevVal) => {
        return prevVal.concat(data.results);
      });
    });
  }, [offset]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginTop:180
        }}
      >
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonCard
              key={pokemon.name + index}
              pokemonUrl={pokemon.url}
              handleKnowMore={handleKnowMore}
            />
          );
        })}
        {selectedPokemon && (
          <PokemonDetailModal
            pokemon={selectedPokemon}
            handleKnowMore={handleKnowMore}
          />
        )}
      </div>
      <button
        onClick={() => {
          setOffSet((prevVal) => {
            return prevVal + 20;
          });
        }} className="buttonWithGradient"
      >
        Load More
      </button>
    </div>
  );
}
