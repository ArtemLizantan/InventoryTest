import "./cancelPopupButton.scss";
interface ICancelPopupButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CancelPopupButton = ({ text, onClick }: ICancelPopupButtonProps) => {
  return (
    <button onClick={onClick} className="cancel-popup-btn">
      {text}
    </button>
  );
};

export default CancelPopupButton;
