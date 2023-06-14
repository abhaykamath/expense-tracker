import React from 'react'

function Display({ income, expense }) {
    return (
        <div id='inc-exp-disp'>
            <div id='inc'>
                <div>INCOME</div>
                <div style={{ color: '#34A853', fontSize: '1.25rem' }}>{parseFloat(income).toFixed(2)}</div>
            </div>
            <div id='wall'></div>
            <div id='exp'>
                <div>EXPENSE</div>
                <div style={{ color: '#EA4335', fontSize: '1.25rem' }}>{parseFloat(expense).toFixed(2)}</div>
            </div>
        </div>
    )
}

export default Display