import { FormEvent, useContext, useEffect, useState } from "react";
import PokemonContext from "../../context/PokemonContext";
import { getSinglePokemon } from "../../lib";
import CardModal from "../util/CardModal";
import { Pokemon } from "../../pokemon.types";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const keywords = ["Moon", "Astronaut", "Lunar", "flight"];

const Sidebar = () => {
  const [search, setInput] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState<Pokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedPokemon, setLikedPokemon] = useLocalStorage("likedPokemon");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    openModal();
    e.preventDefault();

    if (search.trim().length !== 0) {
      try {
        getSinglePokemon(search).then((data) => {
          setSearchedPokemon(data);
        });
      } catch (err) {
        console.log(err);
        setSearchedPokemon(null);
      }
    } else {
      return;
    }
    setInput("");
  };

  return (
    <>
      <div>
        <aside className="p-5  gap-4 flex flex-col max-w-lg lg:w-[450px] lg:border-r mx-auto">
          <form className=" flex flex-col  gap-3 mt-3" onSubmit={handleSubmit}>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="input "
              placeholder="Search"
            />
            <button className="btn">Submit</button>
          </form>
          <div>
            <h1 className="Title text-2xl  font-serif font-medium mt-4">
              Search for your favorite pokemons in one place !
            </h1>
            <div className="text-gray-600 ">
              <p className="py-5 md:block hidden ">
                We help you easily find random fun facts about your favorite
                pokemons and like their experiences so you can come back to them
                later.
              </p>
              <p>
                Click on any of the cards to see more details about the pokemon.
              </p>
            </div>
          </div>
        </aside>
      </div>
      {searchedPokemon && (
        <CardModal
          name={searchedPokemon.name}
          image={searchedPokemon.image}
          height={searchedPokemon.height}
          weight={searchedPokemon.weight}
          isLiked={likedPokemon.includes(searchedPokemon.name)}
          experience={searchedPokemon.experience}
          id={searchedPokemon.id}
          isOpen={isModalOpen}
          onClose={closeModal}
          toggleLiked={() => setLikedPokemon(searchedPokemon.name)}
        />
      )}
    </>
  );
};

export default Sidebar;
