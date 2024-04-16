import "./deletePopupButton.scss";
import { MdDelete } from "react-icons/md";

interface IDeletePopupButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DeletePopupButton = ({ text, onClick }: IDeletePopupButtonProps) => {
  return (
    <button onClick={onClick} className="delete-popup-btn">
      <MdDelete />
      {text}
    </button>
  );
};

export default DeletePopupButton;
