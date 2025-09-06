import { Fragment } from "react/jsx-runtime";
import styles from "./body.module.css";
import React, { use, useState } from "react";
function Body() {
  const [rightPage, setRightPage] = useState(false);

  let [sum, setSum] = useState(0);
  let [monthSum, setMonthSum] = useState(0);
  const [amount, setAmount] = useState("1");
  const [years, setYears] = useState("1");
  const [error, setError] = useState(false);
  const [percent, setPercent] = useState("1");
  function clearAll() {
    let newAmount = "0";
    setAmount(newAmount);
    let newYears = "0";
    setYears(newYears);
    let newPercent = "0";
    setPercent(newPercent);
    setError(false);
  }
  const amountStyle = amount.length <= 0 ? styles.amountWrong : styles.amount;
  const YearsStyle = years.length <= 0 ? styles.yearWrong : styles.year;
  const PercentStyle =
    percent.length <= 0 ? styles.persentStyleWrong : styles.persentStyle;
  const gbpStyle = amount.length <= 0 ? styles.gbpWrong : styles.gbp;
  const textAmount = amount.length <= 0 ? true : false;
  const yearsStyle = years.length <= 0 ? styles.yearsWrong : styles.years;

  const textYears = years.length <= 0 ? true : false;
  const textPercent = percent.length <= 0 ? true : false;
  const percentStyle =
    percent.length <= 0 ? styles.percentWrong : styles.percent;

  const [firstRadio, setFirstRadio] = useState(false);
  const [secondRadio, setSecondRadio] = useState(false);

  function firstRadioFunc() {
    setFirstRadio(!firstRadio);
  }
  const radioFirstStyle =
    firstRadio === true ? styles.radioCircle : styles.radioHide;

  function secondRadioFunc() {
    setSecondRadio(!secondRadio);
  }
  const radioSecondStyle =
    secondRadio === true ? styles.radioCircle : styles.radioHide;
  function onChangeYear(event: React.ChangeEvent<HTMLInputElement>) {
    setYears(event.target.value);
  }
  function onChangePercent(event: React.ChangeEvent<HTMLInputElement>) {
    setPercent(event.target.value);
  }
  function onChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(event.target.value);
  }
  function calculate() {
    const newAmount = parseInt(amount);
    const newYears = parseInt(years);
    const newPercent = parseInt(percent);

    if (isNaN(newAmount) || isNaN(newYears) || isNaN(newPercent)) {
      setError(true);
      return;
    }
    if (!firstRadio && !secondRadio) {
      setError(true);
      return;
    }
    if (firstRadio && secondRadio) {
      setError(true);
      return;
    }
    setError(false);
    setRightPage(true);
    sum = (newAmount * newYears * newPercent) / 20;
    monthSum = (newAmount * newYears * newPercent) / 100;
    setSum(sum);
    setMonthSum(monthSum);
  }
  const hasEmptyFields =
    amount.length === 0 || years.length === 0 || percent.length === 0;
  const hasRadioError = !firstRadio && !secondRadio;
  const hasBothRadiosSelected = firstRadio && secondRadio;
  const rightStyle =
    hasBothRadiosSelected || hasEmptyFields ? styles.rightError : styles.right;
  const leftStyle =
    hasBothRadiosSelected || hasEmptyFields ? styles.leftError : styles.left;

  return (
    <Fragment>
      {error && (
        <p className={styles.alert}>
          Please fill all the fields and choose ONE radio button!!!
        </p>
      )}
      <div className={styles.body}>
        <div className={leftStyle}>
          <div className={styles.leftContent}>
            {/*left content */}

            {/*left content header */}
            <div className={styles.leftContentHeader}>
              <h1>Mortgage Calculator</h1>
              <p onClick={clearAll}>Clear All</p>
            </div>
            {/*left content header div end*/}
            <div className={styles.leftContentForm}>
              <div className={styles.boxFull}>
                <label>Morgage Amount</label>
                <input
                  type="text"
                  onChange={onChangeAmount}
                  className={amountStyle}
                />
                <p className={gbpStyle}>£</p>
                {textAmount && (
                  <p className={styles.textAmount}>This field is required</p>
                )}
              </div>
              {/*two boxes */}
              <div className={styles.boxTwo}>
                <div className={styles.boxFull}>
                  <label>Morgage Term</label>
                  <input
                    type="text"
                    onChange={onChangeYear}
                    className={YearsStyle}
                  />
                  <p className={yearsStyle}>years</p>
                  {textYears && (
                    <p className={styles.textYears}>This field is required</p>
                  )}
                </div>

                {/* second box*/}
                <div className={styles.boxFull}>
                  <label>Interest Rate</label>
                  <input
                    type="text"
                    onChange={onChangePercent}
                    className={PercentStyle}
                  />
                  <p className={percentStyle}>%</p>
                  {textPercent && (
                    <p className={styles.textYears}>This field is required</p>
                  )}
                </div>
              </div>

              <div className={styles.radioButton}>
                <p>Mortgage Type</p>
                <div
                  className={
                    firstRadio === true ? styles.radioClicked : styles.radio
                  }
                >
                  <span
                    className={radioFirstStyle}
                    onClick={firstRadioFunc}
                  ></span>
                  <p>Repayment</p>
                </div>

                <div
                  className={
                    secondRadio === true ? styles.radioClicked : styles.radio
                  }
                >
                  <span
                    className={radioSecondStyle}
                    onClick={secondRadioFunc}
                  ></span>
                  <p>Interest only</p>
                </div>
              </div>
            </div>
            <div className={styles.buttonSubmit}>
              <img src="/icon-calculator.svg" alt="" />
              <p onClick={calculate}>Calculate payment</p>
            </div>
          </div>
          {/*left content  div end*/}

          {/*left  div end */}
        </div>
        {rightPage ? (
          <div className={rightStyle}>
            <div className={styles.rightResults}>
              <h1>Your Results</h1>
              <p>
                Here is your information about payment in one month and in the
                end of your term
              </p>
              <div className={styles.boxResult}>
                <div className={styles.boxResultStart}>
                  <p>Your mounthly repayments</p>
                  <p className={styles.month}>{monthSum}</p>
                </div>
                <div className={styles.boxResultEnd}>
                  <p>Total you'll repay over the term</p>
                  <p className={styles.term}>{sum}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={rightStyle}>
            <div className={styles.rightContent}>
              <img src="/illustration-empty.svg" alt="" />
              <h1>Results Shown Here</h1>
              <p>
                Complete the form and click "calculate the payment" to see what
                your mounthly repayment would be
              </p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
export default Body;
