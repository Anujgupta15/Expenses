import React from "react";
import "./Expenselist.css";
import Expenseitem from "./Expenseitem";
const Expenselist = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Data</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default Expenselist;
