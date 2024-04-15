import { VscListSelection } from "react-icons/vsc";
import "./showProductsButton.scss";

const ShowProductsButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="showProductsBtn">
      <VscListSelection />
    </button>
  );
};

export default ShowProductsButton;
