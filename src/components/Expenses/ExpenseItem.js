import React,{useState} from 'react';
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // document.getElementById('' )

  // let title=props.title;

  // const [title,setTitle]=useState(props.title);

  // const clickFunc=()=>{
  //   // title="hello";
  //   setTitle("Updated !");
  //   console.log(title);
  // };

  
  return (
    <Card className="expense-item">
      <ExpenseDate 
        date={props.date}
      ></ExpenseDate>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">Rs {props.amt}</div>
      </div>
      {/* <button onClick={clickFunc}> change title </button> */}
    </Card>
  );
}
export default ExpenseItem;
