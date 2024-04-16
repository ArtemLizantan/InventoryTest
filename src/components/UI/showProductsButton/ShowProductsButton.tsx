import { VscListSelection } from "react-icons/vsc";
import "./showProductsButton.scss";

interface IShowProductsButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ShowProductsButton = ({ onClick }: IShowProductsButtonProps) => {
  return (
    <button onClick={onClick} className="showProductsBtn">
      <VscListSelection />
    </button>
  );
};

export default ShowProductsButton;
