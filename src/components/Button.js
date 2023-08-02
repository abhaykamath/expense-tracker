import React from "react";

function Button({
  descRef,
  amountRef,
  date,
  updateBalance,
  updateExpense,
  updateIncome,
  updateHistory,
}) {
  return (
    <div className="button-container">
      <button
        id="income"
        onClick={() => {
          const desc = descRef.current.value;
          const amount = parseFloat(amountRef.current.value || 0);
          updateIncome(amount);
          updateHistory({
            type: "income",
            amount: amount,
            desc,
            date,
          });
          updateBalance(amount);
        }}
      >
        Income
      </button>
      <button
        id="expense"
        onClick={() => {
          const desc = descRef.current.value;
          const amount = parseFloat(amountRef.current.value || 0);
          updateExpense(-1 * amount);
          updateHistory({
            type: "expense",
            amount: amount,
            desc,
            date,
          });
          updateBalance(-1 * amount);
        }}
      >
        Expense
      </button>
    </div>
  );
}

export default Button;
