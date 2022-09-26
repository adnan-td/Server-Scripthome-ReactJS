import { useContext, useEffect, useState } from "react";
import Dropdown from "../Scriptdropdown/dropdown.component";
import "./tabs.style.scss";
import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";

const Tabs = ({ children }) => {
  const [state, setState] = useState({ selected: 0 });
  const [selected, setSelected] = useState(0);
  const screenwidth = useContext(WidthContext);

  function handleChange(index) {
    setState({ selected: index });
  }

  useEffect(() => {
    handleChange(selected);
  }, [selected]);

  useEffect(() => {
    setSelected(state.selected);
  }, [state]);

  return (
    <div className="tabs-container">
      {screenwidth > 500 && (
        <ul className="tabs-ul">
          {children.map((elem, index) => {
            let style = index === state.selected ? "tabs-li selected" : "tabs-li";
            return (
              <li key={index} className={style} onClick={() => handleChange(index)}>
                {elem.props.title}
              </li>
            );
          })}
        </ul>
      )}
      {screenwidth <= 500 && <Dropdown selected={selected} setSelected={setSelected} />}
      <div className="tab">{children[state.selected]}</div>
    </div>
  );
};

export default Tabs;
