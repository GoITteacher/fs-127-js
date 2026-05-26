import axios from 'axios';
export async function getPokemon(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const res = await axios.get(url);
  return res.data;
}
