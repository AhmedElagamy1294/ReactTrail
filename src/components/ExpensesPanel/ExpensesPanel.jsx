import { BalanceItem } from "../balanceItem/BalanceItem";

export function ExpensesPanel({ expenses }) {
  return (
    <div className="expensesPanel">
      <h3 className="panelTitle">
        <span className="panelIcon expenseIcon">↓</span>
        Expenses
      </h3>

      {expenses.map((item, index) => (
        <BalanceItem
          key={item.id ?? index}
          label={item.label}
          amount={item.amount}
        />
      ))}
    </div>
  );
}