import "./closeButton.scss";
import { IoMdClose } from "react-icons/io";

interface ICLoseButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  right: string;
  left: string;
  top: string;
}

const CloseButton = ({
  onClick,
  position,
  right,
  left,
  top,
}: ICLoseButtonProps) => {
  return (
    <button
      style={{ position: position, right: right, left: left, top: top }}
      onClick={onClick}
      className="closeBtn"
    >
      <IoMdClose />
    </button>
  );
};

export default CloseButton;
