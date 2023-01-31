import React from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useCallback, useState } from "react";

let dummyexpense = [
  {
    id: "e1",
    title: "Mobile",
    amount: 190,
    date: new Date(2022, 10, 29),
  },
  {
    id: "e2",
    title: "School fee",
    amount: 290,
    date: new Date(2022, 11, 24),
  },
  {
    id: "e3",
    title: "Tution fee",
    amount: 20,
    date: new Date(2022, 9, 20),
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummyexpense);

  const addExpenseHandler = (arg) => {
    setExpenses([arg, ...expenses]);
    console.log("APP", arg);
  };

  return (
    <div className="a">
      <NewExpense newd={addExpenseHandler}></NewExpense>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
