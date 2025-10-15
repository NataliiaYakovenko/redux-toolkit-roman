import React from "react";
import { connect } from "react-redux";
import { increment, decrement, setStep } from "../../store/slices/counterSlice";

const Counter = (props) => {
  const { count, step, increment, decrement, setStep } = props;
  console.log(props);

  return (
    <div>
      <p>Count: {count}</p>
      <label>
        Set step:
        <input
          type="number"
          value={step}
          onChange={({ target: { value } }) => setStep(value)}
        />
      </label>
      <p>Step: {step}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    step: state.counter.step,
  };
};


const mapDispatchTpProps = {
  increment,
  decrement,
  setStep,
};

export default connect(mapStateToProps, mapDispatchTpProps)(Counter);
