import { useState } from "react";

export function AddBalance({ addBalance }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setLabel(e.target.value)}
        value={label}
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => addBalance({ label: label, amount: amount })}>
        Submit
      </button>
    </>
  );
}
