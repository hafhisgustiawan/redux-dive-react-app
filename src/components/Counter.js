// import { Component } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, increase, toggleCounter } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  // use selector sudah setup subscribe secara otomatis dan function ini akan menerima state terbaru dari redux store
  // dan ketika component ini di unmount atau dihapus dari dom, maka akan unsubscribe otomatis juga
  // MANTAPNYA, VIRTUAL DOM REACT HANYA AKAN RE-RENDER COMPONENT YANG SUBSCRIBE SAJA PAK. MANTUL

  // const counter = useSelector((state) => state.counter);
  // const show = useSelector((state) => state.showCounter);

  // untuk pemanggilan state disini sedikit berubah dikarenakan kita memiliki dua buah slice di index.js. Ketika membuat store, di bagian reducer nya kita menggunakan obj, maka nama properti nya juga harus digunakan ketika pemanggilan state
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const increaseHandler = () => {
    dispatch(increase(5)); // params disini adalah payload yang akan dikirim ke slice redux
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.increment();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>-</button>
//           <button onClick={this.incrementHandler.bind()}>+</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapsDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

export default Counter;
// export default connect(mapStateToProps, mapsDispatchToProps)(Counter);
