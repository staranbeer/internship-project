import React, { Key, useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import CardModal from "./CardModal";
import { CardProps } from "../../pokemon.types";

const Card = (props: CardProps) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { image, name, experience, id, height, weight, isLiked, toggleLiked } =
    props;

  const openModal = () => {
    setIsCardOpen(true);
  };

  const closeModal = () => {
    setIsCardOpen(false);
  };

  return (
    <>
      <article
        className="relative mx-auto p-3 flex flex-col gap-3 shadow-lg bg-white rounded-xl  max-w-lg cursor-pointer"
        onClick={openModal}
      >
        <img className="object-cover" src={image} alt={name} />
        <button
          className="active:scale-110 transition-all absolute bottom-4 right-4 p-1 rounded-full grid place-items-center bg-black"
          onClick={(e) => {
            e.stopPropagation();
            toggleLiked(name);
          }}
        >
          <HiOutlineHeart
            size={28}
            stroke="none"
            fill={`${isLiked ? "red" : "white"}`}
          />
        </button>
        <div className="capitalize font-medium">{name}</div>
      </article>
      {/* when the user clicks on a button, open a modal */}

      {isCardOpen && (
        <CardModal
          id={id}
          name={name}
          image={image}
          isLiked={isLiked}
          experience={experience}
          height={height}
          weight={weight}
          isOpen={isCardOpen}
          onClose={closeModal}
          toggleLiked={toggleLiked}
        />
      )}
    </>
  );
};

export default Card;
