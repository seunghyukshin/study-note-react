import React from "react";
import CounterControllContainer from "./CounterControllContainer";
import CounterPresenter from "./CounterPresenter";

const App = () => {
  return (
    <>
      <CounterPresenter />
      <CounterControllContainer />;
    </>
  );
};

export default App;
