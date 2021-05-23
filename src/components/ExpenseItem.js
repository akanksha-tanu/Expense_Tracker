import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // const date=new Date(2021,2,20);
  // const title="car insurance";
  // const amt=298.50;
  
  return (
    <div className="expense-item">
      <ExpenseDate 
        date={props.date}
      ></ExpenseDate>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">Rs {props.amt}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
