import React, { useState } from "react";
import "./Expenseform.css";

const Expenseform = (props) => {
  const [enteredTitle, setuserTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enterdate, setdateChange] = useState("");

  const changefunTitle = (event) => {
    setuserTitle(event.target.value);
    // console.log(event.target.value);
  };

  const changefunAmount = (event) => {
    setenteredAmount(event.target.value);
    // console.log(event.target.value);
  };

  const changefunDate = (event) => {
    setdateChange(event.target.value);
    // console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enterdate),
    };

    props.onchangehappen(expenseData);
    setuserTitle("");
    setenteredAmount("");
    setdateChange("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changefunTitle} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changefunAmount}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2015-01-01"
            max="2050-01-01"
            onChange={changefunDate}
            value={enterdate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default Expenseform;
