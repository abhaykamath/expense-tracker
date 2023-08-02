import React from "react";

function AddTxn({ descRef, amountRef, dateRef, updateDate }) {
  return (
    <>
      <div id="add-txn-label">Add new transaction</div>
      <div className="lbl lbl-main">Description</div>
      <input ref={descRef} type="text" placeholder="Enter Text..." />
      <div className="lbl lbl-main">Transaction Date</div>
      <input
        id="txn-date"
        ref={dateRef}
        onChange={(e) => {
          updateDate(e.target.value);
        }}
        type="date"
        placeholder="dd-mm-yyy"
      />
      <div className="lbl lbl-main">Amount</div>
      <input ref={amountRef} type="number" placeholder="Enter Amount" />
    </>
  );
}

export default AddTxn;
