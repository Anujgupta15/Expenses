import Card from "../UI/Card";
import React from "react";
import "./Expenses.css";
import Expensefilter from "./Expensefilter";
import { useState } from "react";
import Expenselist from "./Expenselist";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <Expensefilter
          selected={filteredYear}
          onChosingYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <Expenselist items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
