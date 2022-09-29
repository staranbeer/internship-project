import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

export interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
}

// the background for the modal
const ModalBackdrop = ({ isOpen, onClose }: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`h-screen w-screen bg-[#0008] fixed left-0 top-0  ${
        isOpen ? "block" : "hidden "
      }`}
    ></div>
  );
};

// the modal content
const ModalContent = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      }  bg-white p-5  rounded-lg z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg md:max-w-3xl md:w-[600px] `}
    >
      {children}
    </div>
  );
};

const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  return (
    <>
      {createPortal(
        <ModalContent isOpen={isOpen} onClose={onClose}>
          {children}
        </ModalContent>,
        document.getElementById("modal-content") as HTMLElement
      )}

      {createPortal(
        <ModalBackdrop isOpen={isOpen} onClose={onClose} />,
        document.getElementById("modal-backdrop") as HTMLElement
      )}
    </>
  );
};

export default Modal;
