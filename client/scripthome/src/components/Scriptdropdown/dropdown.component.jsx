import { useState } from "react";
import "./dropdown.style.scss";

export default function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Description", "Features", "Comments"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {options[selected]}
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={(e) => {
                setSelected(index);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
