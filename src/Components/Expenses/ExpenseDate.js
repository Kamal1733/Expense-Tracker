import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <>
      <h4>{day}</h4> &nbsp;
      <h4>{month}</h4> &nbsp;
      <h4>{year}</h4>
    </>
  );
}

export default ExpenseDate;
