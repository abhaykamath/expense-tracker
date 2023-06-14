import React from 'react'
import '../styles/Txn.css'

function Txn({ type, amount, desc }) {
    return (
        <div className='txn' style={{
            backgroundColor : type === 'expense' ? '#ce7a72' : '#62a873'
        }}>
            <div className='desc'>{desc || '< No desc >'}</div>
            <div className='txn-amount'>{amount}</div>
        </div>
    )
}

export default Txn