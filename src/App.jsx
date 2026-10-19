import { useState } from "react";
import "./App.css";
import { AddBalance } from "./components/addBalance/AddBalance";
import { RemainingBalance } from "./components/RemainingBalance/RemainingBalance";
import { ExpensesPanel } from "./components/ExpensesPanel/ExpensesPanel";
import { IncomePanel } from "./components/IncomePanel/IncomePanel";

function App() {
  const [expenses , setExpenses] = useState([])
  const [incomes , setIncomes] = useState([])

  function addBalanceHandle(item){
    if(item.amount > 0 ){
      setIncomes([...incomes,item])
    }
    else{
      setExpenses([...expenses,item])
    }
  }
 return (
  <div className="appContainer">
    <div className="appCard">
      <h1 className="appTitle">My Budget</h1>

      <RemainingBalance />
      <AddBalance addBalance={addBalanceHandle} />

      <div className="expensesIncomeHolder">
        <ExpensesPanel expenses={expenses} />
        <IncomePanel incomes={incomes} />
      </div>
    </div>
  </div>
);
}

export default App;
