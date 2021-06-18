// import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
// import ExpensesFilter from './components/Expenses/ExpensesFilter';

const App = () => {
  const expense = [
    { title: "car insurance", amt: 298.5, date: new Date(2021, 2, 30) },
    { title: "Laptop", amt: 459.25, date: new Date(2021, 1, 30) },
    { title: "New TV", amt: 3000, date: new Date(2021, 1, 20) },
  ];

  const addExpenseHandler=(enteredData)=>{
    const newExpenseData={ 
      ...enteredData
    }
    console.log(newExpenseData)
  }

  return (
    <div> 
      <NewExpense onSaveExpenseData={addExpenseHandler}/>
      <Expenses expenses={expense}/>
    </div>
  );
}

export default App;
