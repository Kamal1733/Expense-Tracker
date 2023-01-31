import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTiltle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

//   console.log(apple);    

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTiltle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    props.data(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="main">
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTiltle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            value={enteredAmount}
            step="0.01"
            name=""
            id=""
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>

        <div className="Action">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
