import React, { Key, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import CardModal from "./CardModal";

interface CardOwnProps extends React.ComponentPropsWithoutRef<"article"> {
  image: string;
  id: string;
  name: string;
  abilities: string[];
  height: string;
  weight: string;
  experience: string;
  key?: Key | null | undefined;
}

export type CardProps = CardOwnProps &
  Omit<React.ComponentPropsWithoutRef<"article">, keyof CardOwnProps>;

const Card = (props: CardOwnProps) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { image, name, experience, id, height, weight } = props;
  const [isLiked, setIsLiked] = useState(false);

  const openModal = () => {
    setIsCardOpen(true);
  };

  const closeModal = () => {
    setIsCardOpen(false);
  };

  const toggleLiked = () => {
    setIsLiked((i) => !i);
  };

  return (
    <>
      <article
        className="relative mx-auto p-3 flex flex-col gap-3 shadow-lg bg-white rounded-xl  max-w-lg cursor-pointer"
        onClick={openModal}
      >
        <img className="object-cover" src={image} alt={name} />
        <button
          className=" absolute bottom-4 right-4 p-1 rounded-full grid place-items-center bg-black"
          onClick={(e) => {
            e.stopPropagation();
            toggleLiked();
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
