import Axios from "axios";
import { useState, createContext, useEffect } from "react";

export const UserContext = createContext({ user: null });

export const User = ({ children }) => {
  const [user, Setuser] = useState(null);
  const [refresh, Setrefresh] = useState(false);
  useEffect(() => {
    Axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:8000/request/getuser",
    }).then((res) => {
      try {
        console.log(res.data.rows[0]);
        Setuser(res.data.rows[0]);
      } catch (e) {
        Setuser(null);
      }
    });
  }, [refresh]);
  const value = { user, refresh, Setrefresh };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
