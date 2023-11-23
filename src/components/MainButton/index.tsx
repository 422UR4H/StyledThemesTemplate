import { ReactNode } from "react";
import StyledMainButton from "./styles";

type MainButtonProps = {
  children: ReactNode;
  onClick(): void;
};

export default function MainButton({ children, onClick }: MainButtonProps) {
  return <StyledMainButton onClick={onClick}>{children}</StyledMainButton>;
}
