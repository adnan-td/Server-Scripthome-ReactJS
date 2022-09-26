import "./footer.style.scss";
import navlogo from "../../assets/Logo/Logo-final.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img alt="loading" src={navlogo} />
      <p>&copy; Scripthome. All rights reserved.</p>
    </div>
  );
};

export default Footer;
