import React from 'react'

function AddTxn({ descRef, amountRef }) {
    return (
        <>
            <div id='add-txn-label'>Add new transaction</div>
            <div className='lbl lbl-main'>Description</div>
            <input ref={descRef} type='text' placeholder='Enter Text...' />
            <div className='lbl lbl-main'>Amount</div>
            <div className='lbl'>( <span className='red'>negative-expense</span> , <span className='green'>positive-income</span> )</div>
            <input ref={amountRef} type='number' placeholder='Enter Amount' />
        </>
    )
}

export default AddTxn