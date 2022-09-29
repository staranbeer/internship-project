import { HiOutlineHeart, HiOutlineX } from "react-icons/hi";
import Modal from "./Modal";

import { ModalProps } from "./Modal";

interface CardModalProps extends ModalProps {
  image: string;
  id: string;
  name: string;
  height: string;
  weight: string;
  isLiked: boolean;
  experience: string;
  toggleLiked: () => void;
}

const CardModal = (props: CardModalProps) => {
  const {
    height,
    weight,
    isOpen,
    onClose,
    name,
    image,
    isLiked,
    toggleLiked,
    experience,
  } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="md:grid  grid-cols-2 gap-8">
        <div className=" min-w-[300px] md:min-w-full  relative ">
          <header className="items-center justify-between  flex mb-3">
            <h2 className="text-xl font-bold truncate text-ellipsis capitalize">
              {name}
            </h2>
            <button onClick={onClose} className="ml-5">
              <HiOutlineX size={24} className="text-gray-400" />
            </button>
          </header>

          <div className=" bg-red-300 rounded-md">
            <img src={image} className="w-full h-full object-cover " alt="" />
          </div>
          <div
            className="bg-white absolute bottom-4 right-4 p-1 rounded-full grid place-items-center border-2 border-black cursor-pointer"
            onClick={toggleLiked}
          >
            <HiOutlineHeart
              size={36}
              stroke="none"
              fill={`${isLiked ? "red" : "lightgray"}`}
            />
          </div>
        </div>
        <div className="flex-col gap-5 flex">
          <div className="font-bold capitalize mt-5 md:mt-0">trivia</div>
          <div className="md:mt-4  flex-col flex gap-2 flex-1">
            <div className="stat">
              height: <span className="stat-value">{height} ft</span>
            </div>
            <div className="stat">
              weight: <span className="stat-value">{weight} pounds</span>
            </div>
            <div className="stat">
              experience: <span className="stat-value">{experience} xp</span>
            </div>
          </div>
          <a
            href={`https://www.pokemon.com/us/pokedex/${name}`}
            target="_blank"
            onClick={onClose}
            className="btn mt-auto w-full justify-self-end"
          >
            <span>learn more about {name}</span>
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default CardModal;
