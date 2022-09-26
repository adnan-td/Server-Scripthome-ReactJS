import "./mc.style.scss";
import MailImg from "../../../assets/Modal/sign-in/icon-guard.svg";
import EyeShow from "../../../assets/Modal/sign-up/eye.svg";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";
import { useContext, useState } from "react";
import Axios from "axios";
import { UserContext } from "../../../contexts/user/user.context";

const Modalmc = ({ handleClose }) => {
  const { refresh, Setrefresh } = useContext(UserContext);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { email, password } = formFields;

  async function handleNext() {
    const loginDetails = {
      email: email,
      password: password,
    };
    const status = await LoginUser(loginDetails);
    if (status === 200) {
      handleClose();
      Setrefresh(!refresh);
    } else {
      setError("Error Occured");
    }
  }

  async function LoginUser(data) {
    let resp;
    await Axios({
      method: "post",
      data: { ...data },
      withCredentials: true,
      url: "http://localhost:8000/request/login",
    }).then((res) => {
      resp = res;
    });
    return resp.status;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="sign-in-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src={CloseIcon} alt="" className="close-icon" />
        </button>
        <div className="div-wrapper-reset">
          <div className="top-content">
            <img src={MailImg} alt="mail-icon" />
            <div className="header-content">
              <p>Please enter your credentials</p>
              <span>Enter your email address and password to sign in.</span>
            </div>

            <form className="username-input input-field">
              <label htmlFor="">
                Email <span style={{ color: "red" }}>{error ? `(${error})` : ""}</span>
              </label>
              {/* <label htmlFor="">Email or Username</label> */}
              <input type="text" name="email" onChange={handleChange} />
            </form>
            <form className="password-input input-field">
              <label htmlFor="">Password</label>
              <div className="password-div">
                <input type="password" name="password" onChange={handleChange} />
                <img src={EyeShow} alt="show icon" />
              </div>
            </form>
          </div>
          <p className="f-para">
            Forgot your password?{" "}
            <a className="f-anchor" href=" ">
              Click Here to reset it.
            </a>
          </p>
        </div>
        <div className="bottom-button">
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button className="next-button" onClick={handleNext}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
