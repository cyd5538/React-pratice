import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Thename } from "../context/Thename";

const Header = () => {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(Thename)
  return (
    <div
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      {user} 님 환영합니다.
    </div>
  );
};

export default Header;
