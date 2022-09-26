import "./script-card.style.scss";
import eyeicon from "../../assets/Script/Icons/eye.svg";
import hearticon from "../../assets/Homepage/icons/heart-icon.svg";
import imgmain from "../../assets/Homepage/Image/card-img.jpg";

export default function ScriptCard() {
  return (
    <div className="scriptcard">
      <div className="sc-img-c">
        <img alt="loading" src={imgmain} />
      </div>
      <div className="sc-content">
        <div className="sc-text">
          <h3>Farm Life Tycoon | GUI...</h3>
          <p>This new script Farm Life Tycoon works perfectly, it auto builds and collects everything without you...</p>
        </div>
        <div className="sc-icons">
          <p>
            <img alt="loading" src={eyeicon} /> 130
          </p>
          <p className="mod-sc-icons">
            <img alt="loading" src={hearticon} /> 2
          </p>
        </div>
      </div>
    </div>
  );
}
