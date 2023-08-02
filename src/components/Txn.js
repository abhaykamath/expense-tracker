import React from "react";
import "../styles/Txn.css";

function Txn({ type, amount, desc, date }) {
  return (
    <div
      className="txn"
      style={{
        backgroundColor: type === "expense" ? "#ce7a72" : "#62a873",
        backgroundColor: type === "expense" ? "#EA4335" : "#34A853",
      }}
    >
      <div className="desc">{desc || "< No desc >"}</div>
      <div style={{
        fontSize: '0.75rem',
        color: 'black'
      }}>{new Date(date).toDateString()}</div>
      <div className="txn-amount">{amount}</div>
    </div>
  );
}

export default Txn;
