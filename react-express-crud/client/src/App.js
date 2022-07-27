import {Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About';
import AddUser from './pages/AddUser';
import Home from './pages/Home';
import View from './pages/View';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/update/:id" element={<AddUser />} />
      <Route path="/view/:id" element={<View />} />
    </Routes>
  );
}

export default App;
