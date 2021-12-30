import React, { useEffect, useState } from "react";
import Balance from "./components/Balance/Balance";
import Card from "./components/UI/Card/Card";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import styles from "./App.module.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";

const App = () => {
  const [balance, setBalance] = useState("0");
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      name: "Cinema",
      category: "entertainment",
      amount: "500",
      date: "2021-11-10",
      type: "expense",
    },
    {
      id: "e2",
      name: "Salary",
      category: "salary",
      amount: "20000",
      date: "2021-11-9",
      type: "income",
    },
  ]);

  useEffect(() => {
    setBalance(() => {
      const result = expenses.reduce((total, expense) => {
        if (expense.type === "expense") {
          return total - parseInt(expense.amount);
        }
        return total + parseInt(expense.amount);
      }, 0);
      return result;
    });
  }, [expenses]);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      const updatedExpenses = [...prevState];
      updatedExpenses.unshift({ ...newExpense, id: Math.random().toString() });
      return updatedExpenses;
    });
  };

  return (
    <Card className={styles.app}>
      <Balance balance={balance} />
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseList expensesList={expenses} />
    </Card>
  );
};

export default App;
