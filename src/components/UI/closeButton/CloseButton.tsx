import "./closeButton.scss";
import { IoMdClose } from "react-icons/io";
const CloseButton = ({ onClick, position, right, left, top }) => {
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
