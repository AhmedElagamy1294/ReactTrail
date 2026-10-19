export function useCalculateItems(comingExpensesItems, incomesItems) {
  const totalExpenses = comingExpensesItems.reduce(
    (acc, item) => acc + Number(item.amount),
    0,
  );

  const totalIncome = incomesItems.reduce(
    (acc, item) => acc + Number(item.amount),
    0,
  );

  return {totalExp: totalExpenses, totalInc: totalIncome};
}
