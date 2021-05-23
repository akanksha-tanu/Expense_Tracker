// import './App.css';
import Expenses from "./components/Expenses";

function App() {
  const expense = [
    { title: "car insurance", amt: 298.5, date: new Date(2021, 2, 30) },
    { title: "Laptop", amt: 459.25, date: new Date(2021, 1, 30) },
    { title: "New TV", amt: 3000, date: new Date(2021, 1, 20) },
  ];

  return (
    <div> 
      <Expenses expenses={expense}/>
    </div>
  );
}

export default App;
