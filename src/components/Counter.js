import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { action } from '../store';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const show  = useSelector(state => state.showCounter)

  const incrementHandler =()=>{
    console.log('updated state', counter)
      // dispatch({type:'increment'})
      dispatch(action.increment())
  }

  const increaseHandler=()=>{
    console.log('updated increase state', counter)
    // dispatch({type:'Increase', amount:5})
    dispatch(action.increase(5))
  }

  const decrementHandler =()=>{
    console.log('decrement handler',counter)
      // dispatch({type:'DecrementBy2'})
      dispatch(action.decrement())
  }

  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(action.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;