import { BalanceItem } from "../balanceItem/BalanceItem";

export function IncomePanel ({incomes}){
    return (
    <div className="incomePanel">
       {incomes.map((item)=><BalanceItem label={item.label} amount={item.amount} />)} 
    </div>
    )
}