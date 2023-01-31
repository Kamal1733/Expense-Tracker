import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";

import Card from '../UI/Card';

function ExpenseItem(props) {
  
  return (

    // here nested class learning 
    <Card className="expense-item">
      <div className="exp">
        <ExpenseDate date={props.date} />
        &nbsp; &nbsp;
        {/* <div  className="expense-item__description  expense-item"> */}
        <h2>{props.title}</h2>
      </div>
      <div>

      <div className="expense-item__price">{props.amount}</div>
       
      </div>
      
      {/* </div> */}
    </Card>
  );
}

export default ExpenseItem;
 