import React from 'react'
import Txn from './Txn'

function History({ history }) {
    return (
        <>
            <div id='add-txn-label'>Transaction History ({history.length})</div>
            <div id='history'>
                {
                    history.map((txn, index) => {
                        return <Txn key={index} amount={txn.amount} type={txn.type} desc={txn.desc} />
                    })
                }
            </div>
        </>
    )
}

export default History