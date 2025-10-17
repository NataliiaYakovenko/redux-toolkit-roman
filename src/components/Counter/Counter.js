import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import * as counterActionCreater from "../../store/slices/counterSlice";
import * as langActionCreaters from "../../store/slices/langSlice";
import CONSTANTS from "../../constants";
import styles from "./Counter.module.scss";
import { bindActionCreators } from "@reduxjs/toolkit";

const {
  LANGUAGE: { EN_US, UA_UA, PL_PL, DE_DE },
  THEMES,
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
  const language = useSelector((state) => state.lang);
  const theme = useSelector((state) => state.theme);
  const { count, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const { setStep, setLang, increment, decrement } = bindActionCreators({
    ...counterActionCreater,
    ...langActionCreaters,
  }, dispatch);


  const translation = translations.get(language);
  const { countText, stepText, incrementText, decrementText } = translation;

  const className = cx({
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  return (
    <div className={className}>
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

export default Counter;
