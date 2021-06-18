import React ,{useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter"

function Expenses(props){
    console.log(props.expenses);

    const [filteredYear,setFilteredYear]=useState('2020');

    const filterChangeHandler=(selectedyear)=>{
        // console.log(selectedyear)
        setFilteredYear(selectedyear)
    }

    return (

        <div>
        
            <Card className="expenses">
            <ExpensesFilter onSelectYear={filterChangeHandler} selected={filteredYear}/>
                {props.expenses.map((item) => (
                    <ExpenseItem
                    // key={item.id}
                    title={item.title}
                    amt={item.amt}
                    date={item.date}
                    />
                ))}
                
            </Card>
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





/* <ExpenseItem
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
                ></ExpenseItem> */