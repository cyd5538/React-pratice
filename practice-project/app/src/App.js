import "./App.css";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/home' Home />
      </Routes>
    </div>
  );
}

export default App;
