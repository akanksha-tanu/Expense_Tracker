import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props){
    console.log(props.expenses);
    return (
            <div className="expenses">
                <ExpenseItem
                    title={props.expenses[0].title}
                    amt={props.expenses[0].amt}
                    date={props.expenses[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.expenses[1].title}
                    amt={props.expenses[1].amt}
                    date={props.expenses[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.expenses[2].title}
                    amt={props.expenses[2].amt}
                    date={props.expenses[2].date}
                ></ExpenseItem>
            </div>
        
    );
}

export default Expenses;

// import React from "react";
// import ExpenseItem from "./ExpenseItem";
// import Styles from './Expenses.module.css';

// const Expenses = (props) => {
//   return (
//     <div className={Styles.expenses}>
//       {props.items.map((item) => (
//         <ExpenseItem
//           key={item.id}
//           title={item.title}
//           amount={item.amount}
//           date={item.date}
//         />
//       ))}
//     </div>
//   );
// };

// export default Expenses;
