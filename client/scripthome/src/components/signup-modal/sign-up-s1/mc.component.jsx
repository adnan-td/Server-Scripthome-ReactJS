import "./mc.style.scss";
import MailImg from "../../../assets/Modal/sign-up/email-address-icon.svg";
import EyeShow from "../../../assets/Modal/sign-up/eye.svg";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";
import { useState } from "react";

const Modalmc = ({ handleClose, next }) => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    user: "on",
  });
  const [error, setError] = useState("");
  const { name, email, password, cpassword, user } = formFields;

  async function handleNext() {
    if (password !== cpassword) {
      setError("Password does not match");
    } else {
      setError("");
      const newUser = {
        name: name,
        email: email,
        password: password,
        user: user,
      };
      const res = await PostNewUser(newUser);
      if (res.status === 200) {
        // next(2);
        setError("Done for now");
      } else {
        setError("Error Occured");
      }
    }
  }

  async function PostNewUser(data) {
    const response = await fetch(`/request/users/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await response;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="sign-up-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src={CloseIcon} alt="" className="close-icon" />
        </button>
        <div className="top-content">
          <img src={MailImg} alt="mail-icon" />
          <div className="header-content">
            <p>Email Address</p>
            <span>Please enter a email for verifying your account.</span>
          </div>

          <div className="username-input input-field">
            <label htmlFor="">Username</label>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <div className="email-input input-field">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              title="Type your email address"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="password-input input-field">
            <label htmlFor="">Password</label>
            <div className="password-div">
              <input type="password" name="password" onChange={handleChange} />
              <img src={EyeShow} alt="show icon" />
            </div>
          </div>
          <div className="confirm-password-input input-field">
            <label htmlFor="">
              Confirm Password <span style={{ color: "red" }}>{error ? `(${error})` : ""}</span>
            </label>
            <div className="password-div">
              <input type="password" name="cpassword" onChange={handleChange} />
              <img src={EyeShow} alt="show icon" />
            </div>
          </div>
        </div>
        <div className="bottom-button">
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
