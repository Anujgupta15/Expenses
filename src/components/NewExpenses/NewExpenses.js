import React, { useState } from "react";
import "./NewExpenses.css";
import Expenseform from "./Expenseform";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const changeone = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addonthe(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <Expenseform onchangehappen={changeone} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewExpenses;
