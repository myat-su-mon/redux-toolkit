import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase10 } from './redux/counterSlice';

const Home = () => {
    const name = useSelector((state) => state.counter.name);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Home Page - {name}</h1>
        <button onClick={()=> dispatch(increase10(100))}>inc100</button>
    </div>
  )
}

export default Home