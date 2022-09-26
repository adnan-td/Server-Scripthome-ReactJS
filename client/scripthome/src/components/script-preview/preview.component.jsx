import "./preview.style.scss";
import previewimg from "../../assets/Script/Image/side-image.jpg";
import eye from "../../assets/Script/Icons/eye.svg";

const ScriptPreview = () => {
  return (
    <div className="viewscript">
      <img src={previewimg} alt="loading" className="sideimage" />
      <div className="overlaytext1">
        <div className="cover-div">
          <div className="overlaycontent">
            {/* max length of charachters - 38 */}
            <h3>strong simulator...</h3>
            {/* max length of charachters - 105 */}
            <p>
              use strong simulator X script now to train your charachter like
              never befor. We are the best<span>...</span>
            </p>
          </div>
          <div className="side-script-button">
            <div>
              <img src={eye} className="view-icon" alt="eye-icon" />
              <span>6254</span>
            </div>
            <button className="get-script">View Script</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptPreview;
