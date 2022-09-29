import { useEffect, useState } from "react";

let URL = "https://pokeapi.co/api/v2/pokemon";

export const useFetch = (searchQuery = "") => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`${URL}${searchQuery}`)
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results))
      .catch((err) => setError(err.message));
    setIsLoading(false);
  }, []);

  return [pokemonList, isLoading, error];
};
