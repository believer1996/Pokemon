
export function transformPokemonDetails(pokemonDetails) {
  const {
    name,
    id,
    height,
    weight,
    types,
    stats,
    sprites: {
      other: {
        dream_world: { front_default: imageUrl },
      },
    },
  } = pokemonDetails;

  const newPokemonDetails = {
    name,
    id,
    height,
    weight,
    imageUrl,
    type: types[0].type.name,
    stats: stats.map((stat) => {
      return {
        bs: stat.base_stat,
        name: stat.stat.name,
      };
    }),
  };
  return newPokemonDetails;
}

