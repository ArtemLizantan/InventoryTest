import "./deleteButton.scss";
import { MdDelete } from "react-icons/md";

interface IDeleteButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DeleteButton = ({ onClick }: IDeleteButtonProps) => {
  return (
    <button onClick={onClick} className="deleteBtn">
      <MdDelete />
    </button>
  );
};

export default DeleteButton;
