import { Key, ReactNode } from "react";

export interface Pokemon {
  id: string;
  name: string;
  height: string;
  weight: string;
  experience: string;
  image: string;
}

interface CardOwnProps extends React.ComponentPropsWithoutRef<"article"> {
  image: string;
  id: string;
  name: string;
  height: string;
  weight: string;
  experience: string;
  key?: Key | null | undefined;
  toggleLiked: (name: string) => void;
  isLiked: boolean;
}

export interface ModalProps {
  isOpen?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

export type CardProps = CardOwnProps &
  Omit<React.ComponentPropsWithoutRef<"article">, keyof CardOwnProps>;

export interface CardModalProps extends ModalProps {
  image: string;
  id: string;
  name: string;
  height: string;
  weight: string;
  isLiked: boolean;
  experience: string;
  toggleLiked?: (name: string) => void;
}
