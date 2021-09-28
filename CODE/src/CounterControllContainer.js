import React from "react";
import { useDispatch } from "react-redux";
import { increaseNum, decreaseNum } from "./reducers/Counter";
const CounterControllContainer = () => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseNum());
  };

  const handleDecrease = () => {
    dispatch(decreaseNum());
  };

  return (
    <div>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default CounterControllContainer;
