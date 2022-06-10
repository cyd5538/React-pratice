import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement} from './toolkit/reducer'

function App() {
  const count = useSelector((state) => (state.counter.value))
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>React-redux</h1>
      <button onClick={() => dispatch(increment())}>플러스</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>마이너스</button>
    </div> 
  );
}

export default App;
