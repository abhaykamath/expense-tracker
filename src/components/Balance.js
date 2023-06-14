import React from 'react'

function Balance({ balance }) {
    return (
        <div id='balance'>
            <div id='balance-label'>YOUR BALANCE</div>
            <div id='balance-value'>Rs. {parseFloat(balance).toFixed(2)} /-</div>
        </div>
    )
}

export default Balance