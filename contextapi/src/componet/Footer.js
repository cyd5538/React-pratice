import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const {isDark, setisDark} = useContext(ThemeContext);

  const onClick = () => {
    setisDark(!isDark);
  };
  
  return (
    <div
      style={{ backgroundColor: isDark ? "black" : "lightgray" }}
      className="footer"
    >
      <button
        style={{ color : isDark ? "white" : "black",
        backgroundColor: isDark ? "black" : "lightgray" }}
        onClick={onClick}
      >
        {isDark ? "일반모드" : "다크모드"}
      </button>
    </div>
  );
};

export default Footer;
