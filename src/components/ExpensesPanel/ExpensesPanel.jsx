import { BalanceItem } from "../balanceItem/BalanceItem";

export function ExpensesPanel ({expenses}){
    return (
    <div className="expensesPanel">
        {expenses.map((item)=> <BalanceItem label = {item.label} amount = {item.amount}/>)}
        

    </div>
    )
}