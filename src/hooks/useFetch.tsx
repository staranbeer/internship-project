import { useEffect, useState } from "react";

let DEFAULT_SITE_URL = "https://pokeapi.co/api/v2/pokemon";

export const useFetch = (SITE_URL = DEFAULT_SITE_URL) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [url, setUrl] = useState(SITE_URL);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setNext(data.next);
        setPrevious(data.previous);
      })
      .catch((err) => setError(err.message));
    setIsLoading(false);
  }, [url]);

  return [
    pokemonList,
    isLoading,
    error,
    setPokemonList,
    previous,
    next,
    setUrl,
  ];
};
