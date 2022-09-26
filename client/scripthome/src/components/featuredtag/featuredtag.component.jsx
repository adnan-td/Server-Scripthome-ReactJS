import "./featuredtag.style.scss";
import ft from "../../assets/Script/Icons/Featured-Tags.svg";

const FeaturedTag = () => {
  return (
    <div className="f-tag">
      <img alt="loading" src={ft} />
      <div>
        <p className="f-tag-no">#1</p>
        <p className="f-tag-content">Happy</p>
      </div>
    </div>
  );
};

export default FeaturedTag;
