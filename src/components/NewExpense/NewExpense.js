import React from  'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const newExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            // id:Math.random().toString()
        }
        // console.log(expenseData)

        props.onSaveExpenseData(expenseData)
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={newExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;