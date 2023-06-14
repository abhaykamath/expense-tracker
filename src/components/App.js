import React, { useRef, useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import Balance from './Balance'
import Display from './Display'
import History from './History'
import AddTxn from './AddTxn'
import Button from './Button'

function App() {
  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [history, setHistory] = useState([])

  const descRef = useRef(null)
  const amountRef = useRef(null)

  function updateBalance(amount) {
    setBalance(balance => balance + amount)
    amountRef.current.value = ''
    descRef.current.value = ''
  }

  function updateIncome(amount) {
    setIncome(income => income + amount)
  }

  function updateExpense(amount) {
    setExpense(expense => expense + amount)
  }

  function updateHistory(newTxn) {
    setHistory(history => [...history, newTxn]);
  }

  return (
    <div id='app-container'>
      <Header />
      <Balance balance={balance} />
      <Display income={income} expense={expense} />
      <History history={history} />
      <AddTxn descRef={descRef} amountRef={amountRef} />
      <Button
        descRef={descRef}
        amountRef={amountRef}
        updateBalance={updateBalance}
        updateExpense={updateExpense}
        updateIncome={updateIncome}
        updateHistory={updateHistory} />
    </div>
  )
}

export default App