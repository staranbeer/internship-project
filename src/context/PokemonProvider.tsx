import { ReactNode } from "react";
import { useFetch } from "../hooks/useFetch";
import PokemonContext from "./PokemonContext";

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemonList, isLoading, error] = useFetch();

  return (
    <PokemonContext.Provider value={{ pokemonList, isLoading, error }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
