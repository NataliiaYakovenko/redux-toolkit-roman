import React from "react";
import { connect } from "react-redux";
import { increment, decrement, setStep } from "../../store/slices/counterSlice";
import { setLang } from "../../store/slices/langSlice";
import CONSTANTS from "../../constants";

const {
  LANGUAGE: { EN_US, UA_UA, PL_PL, DE_DE },
} = CONSTANTS;

const translations = new Map([
  [
    EN_US,
    {
      countText: "Count",
      stepText: "Step",
      incrementText: "Increment",
      decrementText: "Decrement",
    },
  ],
  [
    UA_UA,
    {
      countText: "Значення лічильнику",
      stepText: "Крок",
      incrementText: "Збільшити лічильник",
      decrementText: "Зменшити лічильник",
    },
  ],
  [
    PL_PL,
    {
      countText: "Wartość licznika",
      stepText: "Krok",
      incrementText: "Zwiększ licznik",
      decrementText: "Zmniejsz licznik",
    },
  ],
  [
    DE_DE,
    {
      countText: "Zählerwert",
      stepText: "Schritt",
      incrementText: "Zähler erhöhen",
      decrementText: "Zähler verringern",
    },
  ],
]);

const Counter = (props) => {
  const {
    counter: { count, step },
    language,
    setLang,
    increment,
    decrement,
    setStep,
  } = props;
  console.log(props);

  const translation = translations.get(language);
  const { countText, stepText, incrementText, decrementText } = translation;

  return (
    <div>
      <select
        value={language}
        onChange={({ target: { value } }) => setLang(value)}
      >
        <option value={EN_US}>English</option>
        <option value={UA_UA}>Ukranian</option>
        <option value={DE_DE}>Deutch</option>
        <option value={PL_PL}>Polska</option>
      </select>

      <p>
        {countText}: {count}
      </p>
      <label>
        {stepText}:
        <input
          type="number"
          value={step}
          onChange={({ target: { value } }) => setStep(value)}
        />
      </label>
      <button onClick={() => increment()}>{incrementText}</button>
      <button onClick={() => decrement()}>{decrementText}</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    language: state.lang,
  };
};

const mapDispatchTpProps = {
  increment,
  decrement,
  setStep,
  setLang,
};

export default connect(mapStateToProps, mapDispatchTpProps)(Counter);
