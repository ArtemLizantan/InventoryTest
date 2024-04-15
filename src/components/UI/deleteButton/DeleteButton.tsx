import "./deleteButton.scss";
import { MdDelete } from "react-icons/md";

const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="deleteBtn">
      <MdDelete />
    </button>
  );
};

export default DeleteButton;
