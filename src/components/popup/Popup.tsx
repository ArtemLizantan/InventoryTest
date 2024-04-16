import { MouseEventHandler } from "react";
import "./popup.scss";
import CloseButton from "../UI/closeButton/CloseButton";
interface IPopupProps {
  closePopup: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  title: string;
}

const Popup = ({
  children,
  closePopup,
  title,
  onClickDelete,
  onClickRemove,
}: IPopupProps) => {
  return (
    <div className="popup">
      <div className="popup__body">
        <CloseButton
          right={-15}
          position={"absolute"}
          top={-15}
          onClick={closePopup}
        />
        <div className="popup__content">
          <div className="popup__top">
            <h2 className="popup__title">{title}</h2>
          </div>
          <div className="popup__center">{children}</div>
          <div className="popup__bottom">
            <button onClick={onClickDelete}>Удалить</button>
            <button onClick={onClickRemove}>Отменить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
