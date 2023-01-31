import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (re) => {
     const expenseData  = {
      ...re,
      id:Math.random().toString()
     }
     props.newd(expenseData)
     console.log(expenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm data={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
