import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseList.module.css";
import Pagination from "./Pagination";

const AMOUNT_PERPAGE = 5;

const ExpenseList = (props) => {
  const expensesList = props.expensesList;
  const [pageNumber, setPageNumber] = useState(1);
  const [shownExpenses, setShownExpenses] = useState([]);

  const pageNumberHandler = (event) => {
      console.log(event)
    setPageNumber(event.target.value);
  }

  useEffect(() => {
    setShownExpenses(
      expensesList.slice(
        (pageNumber - 1) * AMOUNT_PERPAGE,
        pageNumber * AMOUNT_PERPAGE
      )
    );
  }, [expensesList, pageNumber]);

  let content = <p>No expenses yet! Try adding one.</p>;

  if (shownExpenses.length > 0) {
    content = (
      <ul>
        <li className={styles.titles}>
          <div>Name</div>
          <div>Date</div>
          <div>Amount</div>
        </li>
        {shownExpenses.map((expense) => {
          return <ExpenseItem key={expense.id} item={expense} />;
        })}
        <Pagination numberPages={Math.ceil(expensesList.length/AMOUNT_PERPAGE)} onPageNumberChange={pageNumberHandler} />
      </ul>
    );
  }

  return (
    <Card>
      <h2 className={styles.title}>Expenses List</h2>
      {content}
    </Card>
  );
};

export default ExpenseList;
