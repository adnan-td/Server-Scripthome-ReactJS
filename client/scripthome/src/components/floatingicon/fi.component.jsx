import "./fi.style.scss";
import message from "../../assets/message-question-square.svg";

export default function FI() {
  return (
    <button className="FI">
      <img src={message} alt="loading" />
    </button>
  );
}
