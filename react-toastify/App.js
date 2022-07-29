import React, { useEffect } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {}, []);

  const handleClick = (a) => {
    if (a === 1) {
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else if (a === 2) {
      toast.info("2를 눌렀습니다");
    } else if (a === 3) {
      toast.error("에러입니다");
    } else {
      toast.warn("경고입니다");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <button onClick={() => handleClick(1)}>success</button>
        <button onClick={() => handleClick(2)}>info</button>
        <button onClick={() => handleClick(3)}>error</button>
        <button onClick={() => handleClick(4)}>warn</button>
      </div>
    </div>
  );
}

export default App;
