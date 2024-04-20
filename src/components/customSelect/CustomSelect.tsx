import { useState } from "react";
import "./customSelect.scss";
import { CustomSelectProps, Option } from "../../interfaces/interfaces";

const CustomSelect = ({ options, onSelect }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="custom-select">
      <div className="select-header" onClick={handleToggle}>
        {selectedOption ? selectedOption.label : "Select an option"}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div
              key={option.value}
              className={`option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
