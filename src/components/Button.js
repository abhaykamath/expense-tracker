import React from 'react'

function Button({ descRef, amountRef, updateBalance, updateExpense, updateIncome, updateHistory }) {
    return (
        <button id='add' onClick={() => {
            const desc = descRef.current.value;
            const amount = parseFloat(amountRef.current.value || 0);
            if (amount < 0) {
                updateExpense(-1 * amount);
                updateHistory({
                    type: 'expense',
                    amount: amount,
                    desc
                })
            }
            else {
                updateIncome(amount)
                updateHistory({
                    type: 'income',
                    amount: amount,
                    desc
                })
            }
            updateBalance(amount);
        }}>Add Transaction</button>
    )
}

export default Button