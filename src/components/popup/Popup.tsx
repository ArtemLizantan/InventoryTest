import { MouseEventHandler } from "react";
import "./popup.scss";
interface IPopupProps {
  closePopup: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Popup = ({ children, closePopup }: IPopupProps) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <button className="popup-close" onClick={closePopup}>
          Close X
        </button>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
