import { useState } from "react";
import styles from "./FormInput.module.css";

const initialInput = {
  currentSavings: 10000,
  yearlyContribution: 1500,
  expectedReturn: 5,
  duration: 5
};

const FormInput = (props) => {
  const [userInput, setUserInput] = useState(initialInput);

  const currentSavingsHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, currentSavings: +event.target.value };
    });
  };
  const yearlyContributionHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, yearlyContribution: +event.target.value };
    });
  };
  const expectedReturnHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, expectedReturn: +event.target.value };
    });
  };
  const durationHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, duration: +event.target.value };
    });
  };

  const resetHandler = () => {
    setUserInput(initialInput);
    props.onReset();
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(userInput);
  };

  return (
    <div>
      <form className={styles.form}>
        <div className={`${styles["input-group"]}`}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={userInput.currentSavings}
              onChange={currentSavingsHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={userInput.yearlyContribution}
              onChange={yearlyContributionHandler}
            />
          </p>
        </div>
        <div className={`${styles["input-group"]}`}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={userInput.expectedReturn}
              onChange={expectedReturnHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={userInput.duration}
              onChange={durationHandler}
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button
            type="reset"
            className={styles.buttonAlt}
            onClick={resetHandler}
          >
            Reset
          </button>
          <button
            type="submit"
            className={styles.button}
            onClick={submitHandler}
          >
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default FormInput;
