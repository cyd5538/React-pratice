import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import About from "./pages/About";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";
import View from "./pages/View";
import './app.css'
function App() {
  return (
    <>
      <Header />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/update/:id" element={<AddUser />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
