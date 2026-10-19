import { useState } from "react";

export function AddBalance({ addBalance }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <input
  className="formInput"
  type="text"
  placeholder="Transaction name"
  onChange={(e) => setLabel(e.target.value)}
  value={label}
/>

<input
  className="formInput"
  type="number"
  placeholder="Amount (+ income / - expense)"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>

<button
  className="submitButton"
  onClick={() => addBalance({ label, amount })}
>
  Add Transaction
</button>
    </>
  );
}
