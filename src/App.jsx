import { useState } from "react";
import "./App.css";
import { AddBalance } from "./components/addBalance/AddBalance";
import { RemainingBalance } from "./components/RemainingBalance/RemainingBalance";
import { ExpensesPanel } from "./components/ExpensesPanel/ExpensesPanel";
import { IncomePanel } from "./components/IncomePanel/IncomePanel";
import { useCalculateItems } from "./hooks/useCalculateItems";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const { totalExp, totalInc } = useCalculateItems(expenses, incomes);

  function addBalanceHandle(item) {
    if (item.amount > 0) {
      setIncomes([
        ...incomes,
        { id: incomes.length + 1, label: item.label, amount: item.amount },
      ]);
    } else {
      setExpenses([
        ...expenses,
        { id: expenses.length + 1, label: item.label, amount: item.amount },
      ]);
    }
  }

  function handleDel(id, flag) {
    if (flag === "expenses") {
      const filterdArr = expenses.filter((item) => item.id !== id);
      setExpenses([...filterdArr]);
    } else {
      const filterdArr = incomes.filter((item) => item.id !== id);
      setIncomes([...filterdArr]);
    }
  }

  return (
    <div className="appContainer">
      <div className="appCard">
        <h1 className="appTitle">My Budget</h1>

        <RemainingBalance total={totalExp + totalInc} />
        <AddBalance addBalance={addBalanceHandle} />

        <div className="expensesIncomeHolder">
          <ExpensesPanel expenses={expenses} handleDel={handleDel} />
          <IncomePanel incomes={incomes} handleDel={handleDel} />
        </div>
      </div>
    </div>
  );
}

export default App;
