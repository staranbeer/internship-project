import React, { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";

const Footer = () => {
  const { next, previous, pokemonList, setUrl } = useContext(PokemonContext);
  const [pageCount, setPageCount] = React.useState(1);

  const handleNext = () => {
    setPageCount((i) => i + 1);
    setUrl(next);
  };

  const handlePrevious = () => {
    if (pageCount > 1) {
      setPageCount((i) => i - 1);
      setUrl(previous);
    }
  };

  console.log(next, pokemonList);
  return (
    <footer className="flex justify-center py-5 bg-gray-100">
      <div className="space-x-5">
        <button
          className="btn flex-1"
          disabled={!previous}
          onClick={handlePrevious}
        >
          PREVIOUS
        </button>
        <button className="btn flex-1 btn-outline">{pageCount}</button>
        <button className="btn flex-1" disabled={!next} onClick={handleNext}>
          NEXT
        </button>
      </div>
    </footer>
  );
};

export default Footer;
