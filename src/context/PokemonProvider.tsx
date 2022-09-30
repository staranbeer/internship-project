import { ReactNode } from "react";
import { useFetch } from "../hooks/useFetch";
import PokemonContext from "./PokemonContext";

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [
    pokemonList,
    isLoading,
    error,
    setPokemonList,
    previous,
    next,
    setUrl,
  ] = useFetch();
  return (
    <PokemonContext.Provider
      value={{
        setPokemonList,
        pokemonList,
        isLoading,
        error,
        previous,
        next,
        setUrl,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
