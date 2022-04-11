import React, { useState } from "react";
import Page from "./componet/Page";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { Thename } from "./context/Thename";

function App() {
  const [isDark, setisDark] = useState(false);
  
  return (
    <Thename.Provider value={'사용자'}>
      <ThemeContext.Provider value={{ isDark, setisDark }}>
        <div>
          <Page />
        </div>
      </ThemeContext.Provider>
    </Thename.Provider>
  );
}

export default App;
