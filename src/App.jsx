import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Vite + React</h1>
      count is: {counter}
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy(2))}>Increment by 2</button>
      </div>
    </div>
  );
}

export default App;
