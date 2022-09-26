import { useEffect } from "react";

export default function Rerouter() {
  useEffect(() => {
    window.location.reload();
  }, []);
  return <div></div>;
}
