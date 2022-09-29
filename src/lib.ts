let URL = "https://pokeapi.co/api/v2/pokemon";

const getSinglePokemon = async (name: string) => {
  let res = await fetch(`${URL}/${name}`);
  let data = await res.json();

  data = {
    id: data.id,
    name: data.name,
    weight: data.weight,
    height: data.height,
    image: data.sprites.front_default,
    experience: data.base_experience,
  };

  return data;
};

const getMultiplePokemon = async (pokemonList) => {
  let pokemonData = [];

  for (let pokemon of pokemonList) {
    let data = await getSinglePokemon(pokemon.name);
    pokemonData.push(data);
  }

  return pokemonData;
};

export { getMultiplePokemon, getSinglePokemon };
