
import {transformPokemonDetails} from './transformer';
export async function fetchPokemons(offset,limit){
  const response=await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
       const jsonresponse=await response.json();
       console.log(jsonresponse);
       return jsonresponse;
}


export async function fetchPokemonDetail(url){
const response=await fetch(url);
const jsonResponse=await response.json();
return transformPokemonDetails(jsonResponse); 
}