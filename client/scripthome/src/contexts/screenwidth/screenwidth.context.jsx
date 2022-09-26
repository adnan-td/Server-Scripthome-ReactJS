import { useState, createContext, useEffect } from "react";

export const WidthContext = createContext({ screenwidth: null });

export const ScreenWidth = ({ children }) => {
  const [screenwidth, Setscreenwidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      Setscreenwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <WidthContext.Provider value={screenwidth}>{children}</WidthContext.Provider>;
};
