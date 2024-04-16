import { MouseEventHandler } from "react";
import "./popup.scss";
import CloseButton from "../UI/closeButton/CloseButton";
import DeletePopupButton from "../UI/deletePopupButton/DeletePopupButton";
import CancelPopupButton from "../UI/cancelPopupButton/CancelPopupButton";
interface IPopupProps {
  closePopup: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  title: string;
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
  onClickRemove: React.MouseEventHandler<HTMLButtonElement>;
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
            <div className="popup__buttons">
              <CancelPopupButton text="Отмена" onClick={onClickRemove} />
              <DeletePopupButton onClick={onClickDelete} text={"Удалить"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  Ё;
};

export default Popup;
