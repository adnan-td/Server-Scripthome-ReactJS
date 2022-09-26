import vector1 from "../../assets/Background/Vector 17.svg";
import vector2 from "../../assets/Background/Ellipse 1.svg";
import vector3 from "../../assets/Background/Ellipse 3.svg";
import "./background.style.scss";

const Background = () => {
  return (
    <>
      <img alt="loading" src={vector1} className="vector1" />
      <img alt="loading" src={vector2} className="vector2" />
      <img alt="loading" src={vector3} className="vector3" />
    </>
  );
};

export default Background;
