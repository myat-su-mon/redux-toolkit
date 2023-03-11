import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './Home';
import { decrement, increment,reset, testing, increase10, changeName } from './redux/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const name = useSelector((state) => state.counter.name);
  const cartName = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(testing(100))}>Click me</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(increase10(10))}>Increase 10</button>
      <button onClick={() => dispatch(changeName("Myat"))}>Change Name</button>
      
      <Home/>
    </div>
  );
}

export default App