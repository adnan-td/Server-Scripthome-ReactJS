import { useState } from "react";
import Modalmc from "./sign-in-modal/mc.component";
import "./modal.style.scss";

export default function Signinmodal({ className, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={className}>
        {children}
      </button>
      {show ? <Modalmc handleClose={handleClose} /> : ""}
    </>
  );
}
