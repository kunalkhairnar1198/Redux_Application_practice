import { useDispatch, useSelector, connect } from 'react-redux';
import classes from './Counter.module.css';
import { Component } from 'react';
import { INCREMENT } from '../store';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const show  = useSelector(state => state.showCounter)

  const incrementHandler =()=>{
    console.log('updated state', counter)
      dispatch({type:INCREMENT})
  }

  const increaseHandler=()=>{
    console.log('updated increase state', counter)
    dispatch({type:'Increase', amount:5})
  }

  const decrementHandler =()=>{
    console.log('decrement handler',counter)
      dispatch({type:'DecrementBy2'})
  }


  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
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

// class Counter extends Component{
// // hooks are not use in classbase component
//   incrementHandler(){
//     this.props.increment()
//   }
//   decrementHandler(){
//     this.props.decrement()
//   }

//   toggleCounterHandler(){

//   }

//   render(){
//   return(
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>-- {this.counter} --</div>
//             <div>
//               <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//               <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//             </div>
//             <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//         </main>
//     )
//   }
// }

// const mapsStateProps = state => {
//   return{
//     counter: state.counter
//   }
// }

// const mapDispatchProp = dispatch =>{
//   return{
//     increment:()=> dispatch({type:'IncrementBy5'}) ,
//     decrement:()=> dispatch({type:'DecrementBy5'}) 
//   }
// }

// export default connect(mapsStateProps, mapDispatchProp)(Counter);
//connect is higher order component