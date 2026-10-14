import { useState } from "react";
import "./App.css";
import { AddBalance } from "./components/addBalance/AddBalance";
import { RemainingBalance } from "./components/RemainingBalance/RemainingBalance";
import { ExpensesPanel } from "./components/ExpensesPanel/ExpensesPanel";
import { IncomePanel } from "./components/IncomePanel/IncomePanel";

function App() {
  return (
    <>
      <RemainingBalance />
      <AddBalance />
      <div className="expensesIncomeHolder">
        <ExpensesPanel />
        <IncomePanel />
      </div>
    </>
  );
}

export default App;
