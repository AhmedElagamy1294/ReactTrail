import { BalanceItem } from "../balanceItem/BalanceItem";

export function IncomePanel({ incomes }) {
  return (
    <div className="incomePanel">
      <h3 className="panelTitle">
        <span className="panelIcon incomeIcon">↑</span>
        Income
      </h3>

      {incomes.map((item, index) => (
        <BalanceItem
          key={item.id ?? index}
          label={item.label}
          amount={item.amount}
        />
      ))}
    </div>
  );
}