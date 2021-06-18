import React ,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{


    // const [userInput,setUserInput]=useState({
    //     newTitle:'',
    //     newAmount:'',
    //     newDate:''
    // });

    // const titleChangeHandler=(event)=>{
    //     // setNewTitle(event.target.value);
    //     // setUserInput({
    //     //     ...userInput,
    //     //     newTitle:event.target.value
    //     // })
    //     setUserInput((prevstate)=>{
    //         // return the new state
    //         //this is a safer way to be sure that u always depend on the latest state
    //         return{...prevstate,newTitle:event.target.value}
    //     })
    //     console.log(event.target.value);

    // }
    // const amountChangeHandler=(event)=>{
    //     // setUserInput(userInput)
    //     setUserInput({
    //         ...userInput,
    //         newAmount:event.target.value
    //     })
    //     console.log(event.target.value);
    //     // setNewAmount(event.target.value);

    // }
    // const dateChangeHandler=(event)=>{
    //     setUserInput({
    //         ...userInput,
    //         newDate:event.target.value
    //     })
    //     console.log(event.target.value);
    //     // setNewDate(event.target.value);

    // }

    const [newTitle,setNewTitle]=useState('');
    const [newAmount,setNewAmount]=useState('');
    const [newDate,setNewDate]=useState('');

    const titleChangeHandler=(event)=>{
            setNewTitle(event.target.value);
            console.log(event.target.value);
    
        }
    const amountChangeHandler=(event)=>{
            setNewAmount(event.target.value);
    
        }
     const dateChangeHandler=(event)=>{
            // console.log(event.target.value);
            setNewDate(event.target.value);
    
        }

    const submitHandler=(event)=>{
        //default javascript behaviour
        //prevent the request sent from the form and since request is not sent ,
        //the page will not load
        event.preventDefault();

        const expenseData={
            title:newTitle,
            amt:newAmount,
            date:newDate
        }

        props.onSaveExpenseData(expenseData)
        // console.log(expenseData);
        setNewTitle('')
        setNewAmount('')
        setNewDate('')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label for='title'>Title</label>
                    <input type='text' id='title' name='title' value={newTitle} required onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label for='amt'>Amount</label>
                    <input type='number' id='amt' name='amt' value={newAmount} min='0.01' step='0.01' required onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label for='date'>Date</label>
                    <input type='date' id='date' name='date' value={newDate} min="2019-01-01" max='2022-12-31' required onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;