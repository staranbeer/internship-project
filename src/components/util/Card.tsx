import React, { Key, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import CardModal from "./CardModal";

interface CardOwnProps extends React.ComponentPropsWithoutRef<"article"> {
  image: string;
  id: string;
  date: string;
  title: string;
  description: string;
  keywords: string[];
  photographer: string;
  key?: Key | null | undefined;
}
export type CardProps = CardOwnProps &
  Omit<React.ComponentPropsWithoutRef<"article">, keyof CardOwnProps>;

const Card = (props: CardOwnProps) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { image, title, photographer, keywords, description } = props;
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
        className="relative mx-auto p-3 flex flex-col gap-3 shadow-lg bg-white rounded-xl max-w-sm cursor-pointer min-h-sm"
        onClick={openModal}
      >
        <img className="object-cover" src={image} alt={title} />
        <div
          className="bg-white absolute bottom-4 right-4 p-1 rounded-full grid place-items-center border-2 border-black"
          onClick={(e) => {
            e.stopPropagation();
            toggleLiked();
          }}
        >
          <HiOutlineHeart
            size={28}
            stroke="none"
            fill={`${isLiked ? "red" : "lightgray"}`}
          />
        </div>
      </article>
      {/* when the user clicks on a button, open a modal */}

      {isCardOpen && (
        <CardModal
          title={title}
          image={image}
          isLiked={isLiked}
          photographer={photographer}
          keywords={keywords}
          description={description}
          isOpen={isCardOpen}
          onClose={closeModal}
          toggleLiked={toggleLiked}
        />
      )}
    </>
  );
};

export default Card;
