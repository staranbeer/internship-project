import { useEffect, useState } from "react";

const useLocalStorage = (key: string) => {
  const [likedPokemon, setValue] = useState<string[]>([]);

  useEffect(() => {
    setValue(() => {
      const likedPokemon = localStorage.getItem(key);
      return likedPokemon ? JSON.parse(likedPokemon) : [];
    });
  }, []);

  const setLikedPokemon = (value: string): void => {
    if (likedPokemon.includes(value)) {
      setValue(likedPokemon.filter((pokemon) => pokemon !== value));
      window.localStorage.setItem(
        key,
        JSON.stringify(likedPokemon.filter((pokemon) => pokemon !== value))
      );
    } else {
      setValue([...likedPokemon, value]);
      window.localStorage.setItem(
        key,
        JSON.stringify([...likedPokemon, value])
      );
    }
  };

  return [likedPokemon, setLikedPokemon] as const;
};

export { useLocalStorage };
