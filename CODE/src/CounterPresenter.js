import React from "react";
import { useSelector } from "react-redux";
const CounterPresenter = () => {
  const count = useSelector((state) => state.num);
  return <div> 현재 카운트 : {count}</div>;
};

export default CounterPresenter;
