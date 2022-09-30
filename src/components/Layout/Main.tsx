import { useCallback, useContext, useEffect, useState } from "react";
import { getMultiplePokemon } from "../../lib";
import Card from "../util/Card";
import Loading from "../util/Loading";
import { Pokemon } from "../../pokemon.types";
import PokemonContext from "../../context/PokemonContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Main = () => {
  const { pokemonList, isLoading } = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [likedPokemon, setLikedPokemon] = useLocalStorage("likedPokemon");

  const fetchMultiplePokemon = useCallback(async () => {
    const data = await getMultiplePokemon(pokemonList);
    setPokemons(data);
  }, [pokemonList]);

  useEffect(() => {
    fetchMultiplePokemon();
  }, [fetchMultiplePokemon]);

  const toggleLiked = (name: string) => {
    setLikedPokemon(name);
  };

  return (
    <main className="p-5 bg-gray-100 ">
      {isLoading || pokemons.length === 0 ? (
        <Loading />
      ) : (
        <div className=" space-y-7 max-w-4xl mx-auto justify-center gap-12 lg:columns-3  md:columns-2  columns-1">
          {pokemons.map((pokemon: Pokemon) => {
            return (
              <Card
                toggleLiked={toggleLiked}
                isLiked={likedPokemon.includes(pokemon.name)}
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.image}
                height={pokemon.height}
                experience={pokemon.experience}
                weight={pokemon.weight}
                key={pokemon.id}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Main;
