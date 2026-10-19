import { BalanceItem } from "../balanceItem/BalanceItem";

export function ExpensesPanel({ expenses , handleDel  }) {
  return (
    <div className="expensesPanel">
      <h3 className="panelTitle">
        <span className="panelIcon expenseIcon">↓</span>
        Expenses
      </h3>

      {expenses.map((item, index) => (
        <BalanceItem
          keyy={item.id ?? index}
          label={item.label}
          amount={item.amount}
          handleDel={() => handleDel(item.id, 'expenses')}
        />
      ))}
    </div>
  );
}