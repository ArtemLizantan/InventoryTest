import React from "react";
import { FaPlus } from "react-icons/fa6";
import "./addButton.scss";

interface IAddButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AddButton = ({ onClick, text }: IAddButtonProps) => {
  return (
    <button onClick={onClick} className="add-btn">
      <FaPlus />
      {text}
    </button>
  );
};

export default AddButton;
