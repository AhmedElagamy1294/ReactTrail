
export function BalanceItem ({label,amount , handleDel , keyy}) {

    return <div className="balanceItem">
        <button onClick={()=>handleDel(keyy)}>del</button>
        {amount} {label}
    </div>
}