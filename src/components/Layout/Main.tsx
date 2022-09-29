import { useCallback, useContext, useEffect, useState } from "react";
import PokemonContext from "../../context/PokemonContext";
import { getMultiplePokemon } from "../../lib";
import Card, { CardProps } from "../util/Card";
import Loading from "../util/Loading";

const Main = () => {
  const { pokemonList, isLoading } = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState([]);

  const [likedPokemon, setLikedPokemon] = useState<string[]>(
    window.localStorage.getItem("likedPokemon") || []
  );

  const toggleLiked = (name: string) => {
    if (likedPokemon.includes(name)) {
      let filtered = likedPokemon.filter((pokemon) => pokemon !== name);
      setLikedPokemon(filtered);
      window.localStorage.setItem(
        "likedPokemon",
        JSON.stringify(likedPokemon.filter((pokemon) => pokemon !== name))
      );
    } else {
      let newLikedPokemon = [...likedPokemon, name];
      setLikedPokemon(newLikedPokemon);
      window.localStorage.setItem(
        "likedPokemon",
        JSON.stringify(newLikedPokemon)
      );
    }
  };

  const fetchMultiplePokemon = useCallback(async () => {
    const data = await getMultiplePokemon(pokemonList);
    setPokemons(data);
  }, [pokemonList]);

  useEffect(() => {
    fetchMultiplePokemon();
  }, [fetchMultiplePokemon]);

  return (
    <main className="p-5 flex-1 bg-gray-100 lg:overflow-scroll">
      {isLoading || pokemons.length === 0 ? (
        <Loading />
      ) : (
        <div className=" space-y-7 max-w-4xl mx-auto justify-center gap-12 lg:columns-3  md:columns-2  columns-1">
          {pokemons.map((pokemon: CardProps) => {
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
                title={pokemon.name}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Main;
