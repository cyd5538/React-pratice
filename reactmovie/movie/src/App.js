import { Route,Routes } from 'react-router-dom';
import './style.css'
import Home from './routes/Home';
import Detail from './routes/Detail';
function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie:id" element={<Detail />} />
    </Routes>
  )
}

export default App;
