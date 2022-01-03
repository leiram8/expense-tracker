import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const today = new Date().toJSON().slice(0, 10);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("other");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(today);
  const [type, setType] = useState("expense");
  const [errorMsj, setErrorMsj] = useState();

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const typeHandler = (event) => {
    setType(event.target.value);
  };

  const submitHandler = (event) => {
    setErrorMsj();

    event.preventDefault();
    if (name.trim().length === 0) {
      setErrorMsj("Please enter a name.");
      return;
    }
    if (amount.trim().length === 0) {
      setErrorMsj("Please enter an amount.");
      return;
    }
    if (date.trim().length === 0) {
      setErrorMsj("Please enter a date.");
      return;
    }

    props.onAddExpense({
      name: name,
      category: category,
      amount: amount,
      date: date,
      type: type,
    });

    setName("");
    setCategory("other");
    setAmount("");
    setDate(today);
    setType("expense");
  };

  return (
    <Card className={styles.expenseform}>
      <form onSubmit={submitHandler}>
        <div>
          <h2 className={styles.title}>New Expense</h2>
        </div>
        <div>
          <label>Name</label>
          <input type="text" onChange={nameHandler} value={name} />
        </div>
        <div>
          <label>Category</label>
          <select value={category} onChange={categoryHandler}>
            <option value="food">Food</option>
            <option value="housing">Housing</option>
            <option value="transportation">Transportation</option>
            <option value="utilities">Utilities</option>
            <option value="healthcare">Healthcare</option>
            <option value="debt">Debt</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            min={1}
            onChange={amountHandler}
            value={amount}
          />
        </div>
        <div>
          <label>Date</label>
          <input type="date" onChange={dateHandler} value={date} />
        </div>
        <div>
          <label>Type</label>
          <select value={type} onChange={typeHandler}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        {errorMsj && <div className={styles.errormsj}>{errorMsj}</div>}
        <Button type="submit" className={styles.btn}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default ExpenseForm;
