import { HiOutlineHeart, HiOutlineX } from "react-icons/hi";
import Modal from "./Modal";

import { ModalProps } from "./Modal";

interface CardModalProps extends ModalProps {
  image: string;
  title: string;
  photographer: string;
  description: string;
  keywords: string[];
  isLiked: boolean;
  toggleLiked: () => void;
}

const CardModal = (props: CardModalProps) => {
  const {
    isOpen,
    onClose,
    description,
    title,
    image,
    keywords,
    photographer,
    isLiked,
    toggleLiked,
  } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold truncate text-ellipsis">
          lorem10{title}
        </h2>
        <button onClick={onClose} className="ml-5">
          <HiOutlineX size={28} className="text-gray-400" />
        </button>
      </div>
      <div className="mt-6 min-w-[250px]  relative ">
        <div className=" bg-red-300">
          <img src={image} className="w-full h-full object-cover" alt="" />
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
      <div className="mt-4 truncate">{description}</div>
    </Modal>
  );
};

export default CardModal;
